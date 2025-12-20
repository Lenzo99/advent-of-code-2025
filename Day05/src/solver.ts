export class InventoryManagementSystem {
    private freshIngredientsIDsRanges: string[] = [];
    private availableIngredientsIDs: number[] = [];

    constructor (rangesIDs: string[], availablesIDs: string[]) {
        this.freshIngredientsIDsRanges = rangesIDs;
        this.exctractAvailableIngredientsIDs(availablesIDs);
        this.collapseRanges();
    }

    public countAvailableFreshIDs (): number {
        let counter = 0;

        for (let availablesID of this.availableIngredientsIDs) {
            if ( this.isFresh(availablesID) ) {
                counter++;
            }
        }

        return counter;
    }

    public countFreshIDs (): number {
        let counter = 0;

        for (let range of this.freshIngredientsIDsRanges) {
            let [ rangeL, rangeR ] = this.extractRange(range);
            counter += (rangeR - rangeL) + 1;
        }

        return counter;
    }

    private exctractAvailableIngredientsIDs(availablesIDs: string[]): void {
        for (let availablesID of availablesIDs) {
            let ID = parseInt(availablesID);
            this.availableIngredientsIDs.push(ID);
        }
    }

    private collapseRanges(): void {        
        let ranges = this.freshIngredientsIDsRanges;
        for (let i = 0; i < ranges.length-1; i++) {
            let first = ranges[i];
            let [ firstL, firstR ] = this.extractRange(first);

            for (let j = i+1; j < ranges.length; j++) {
                let second = ranges[j];
                let [ secondL, secondR ] = this.extractRange(second);

                if ( this.doTheyOverlap(first, second) ) {
                    let newL = (firstL < secondL) ? firstL : secondL;
                    let newR = (firstR > secondR) ? firstR : secondR;
                    ranges[i] = `${newL}-${newR}`;
                    first = ranges[i];
                    firstL = newL;
                    firstR = newR;
                    ranges.splice(j, 1);
                    j=i;
                }
            }
        }
    }

    private doTheyOverlap(first: string, second: string): boolean {
        let overlapped = true;
        let [ firstL, firstR ] = this.extractRange(first);
        let [ secondL, secondR ] = this.extractRange(second);

        if (firstL > secondR && firstR > secondR) {
            overlapped = false;
        } else if (firstR < secondL && firstR < secondR) {
            overlapped = false;
        }

        return overlapped;
    }

    private extractRange(range: string): number[]{
        let [ boundL, boundR ] = range.split("-");
        return [ parseInt(boundL), parseInt(boundR) ];
    }

    private isFresh (id: number): boolean {
        let fresh = false;

        for (let range of this.freshIngredientsIDsRanges) {
            let [ rangeL, rangeR ] = this.extractRange(range);
            if (id >= rangeL && id <= rangeR) {
                fresh = true;
            }
        }

        return fresh;
    }
}