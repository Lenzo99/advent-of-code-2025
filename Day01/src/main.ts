import { start } from "node:repl";

export class Dial {
    private min: number = 0;
    private max: number = 0;
    private minDisplayed: number;
    private maxDisplayed: number;
    private position: number = 0;

    constructor (min: number = 0, max: number = 99) {
        this.minDisplayed = min;
        this.maxDisplayed = max;
        this.adjustMinAndMaxDisplayed();
        this.setMax();
    }

    private adjustMinAndMaxDisplayed (): void {
        if (this.maxDisplayed < this.minDisplayed) {
            let tempSwitchValues = this.maxDisplayed;
            this.maxDisplayed = this.minDisplayed;
            this.minDisplayed = tempSwitchValues;
        } else if (this.maxDisplayed === this.minDisplayed) {
            this.maxDisplayed++;
        }
    }

    private setMax (): void {
        this.max = this.maxDisplayed - this.minDisplayed;
    }

    public setPosition (posDisplayed: number): void {
        if ( this.isValidPosition(posDisplayed) ) {
            this.position = posDisplayed - this.minDisplayed;
        }
    }

    public isValidPosition (posDisplayed: number): boolean {
        return (posDisplayed > this.minDisplayed && posDisplayed < this.maxDisplayed);
    }

    public getPosition (): number {
        return this.position + this.minDisplayed;
    }

    /** A rotation must be a ^[RL]\d+$ string. */
    public rotate (rotation: string): void {
        let {wise, distance} = this.extractRotation(rotation);
        
        if (wise === "L") {
            this.rotateLeft(distance);
        }
        if (wise === "R") {
            this.rotateRight(distance);
        }
    }

    /** A rotation must be a ^[RL]\d+$ string. */
    public rotateCountingMinTouches (rotation: string): number {
        let {wise, distance} =  this.extractRotation(rotation);
        let lapSize = this.max + 1;
        let completedLaps = Math.floor( distance / lapSize );
        let distanceIgnornigCompletedLaps = distance % lapSize;
        let minTouches = completedLaps;

        if (wise === "L") {
            if ( this.rotateLeftAndIsMinTouched(distanceIgnornigCompletedLaps) ) {
                minTouches++;
            }
        }
        if (wise === "R") {
            if ( this.rotateRightAndIsMinTouched(distanceIgnornigCompletedLaps) ) {
                minTouches++;
            }
        }

        return minTouches;
    }

    private rotateLeftAndIsMinTouched (distanceIgnornigCompletedLaps: number): boolean {
        let isMinTouched = false;

        if ( this.isArrowAtMin() ) {
            this.rotateLeft(distanceIgnornigCompletedLaps);
        } else {
            let startPosition = this.position;
            this.rotateLeft(distanceIgnornigCompletedLaps);
            if (this.isArrowAtMin() || (this.position > startPosition)) {
                isMinTouched = true;
            }
        }

        return isMinTouched;
    }

    private rotateRightAndIsMinTouched (distanceIgnornigCompletedLaps: number): boolean {
        let isMinTouched = false;

        if ( this.isArrowAtMin() ) {
            this.rotateRight(distanceIgnornigCompletedLaps);
        } else {
            let startPosition = this.position;
            this.rotateRight(distanceIgnornigCompletedLaps);
            if (this.isArrowAtMin() || (this.position < startPosition)) {
                isMinTouched = true;
            }
        }

        return isMinTouched;
    }

    private extractRotation (rotation: string): { wise: string, distance: number } {
        let wise: string = rotation.charAt(0);
        let distance: number = parseInt( rotation.slice(1) );
        return {wise, distance};
    }

    private rotateLeft (distance: number): void {
        let rangeSize = this.max + 1;
        let distanceIgnoringCompleteLaps = distance % rangeSize;
        let newPosition = (this.position - distanceIgnoringCompleteLaps + rangeSize) % rangeSize;
        this.position = newPosition;
    }

    private rotateRight (distance: number): void {
        let rangeSize = this.max + 1;
        let newPosition = (this.position + distance) % rangeSize;
        this.position = newPosition;
    }

    public isArrowAtMin (): boolean {
        return (this.position === this.min);
    }

    public toString (): string {
        let posDisplayed = this.position + this.minDisplayed;
        return `min: ${this.minDisplayed}, max: ${this.maxDisplayed}, position: ${posDisplayed}`;
    }
}
