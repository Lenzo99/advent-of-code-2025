export class InventoryManagementSystem {
    private freshIngredientsIDsRanges: string[] = [];
    private availableIngredientsIDs: number[] = [];

    constructor (ranges: string[], available: string[]) {
        this.freshIngredientsIDsRanges = ranges;
        this.collapseRanges();
        this.exctractAvailableIngredientsIDs( available );
    }

    private exctractAvailableIngredientsIDs (ids: string[]): void {
        for (let id of ids) {
            this.availableIngredientsIDs.push( parseInt(id) );
        }
    }

    public countAvailableFreshIDs (): number{
        let counter = 0;

        for (let ingredientID of this.availableIngredientsIDs) {
            if( this.isFresh(ingredientID) ) {
                counter++;
            }
        }

        return counter;
    }

    private isFresh(ingredientID: number): boolean{
        let fresh = false;
        for (let range of this.freshIngredientsIDsRanges) {
            if( this.isFreshInRange(ingredientID, range) ) {
                fresh = true;
                break;
            }
        }
        return fresh;
    }

    private isFreshInRange(ingredientID: number, range: string): boolean {
        let fresh = false;

        if (range !== "") {
            let [ minBoundString, maxBoundString ] = range.split("-");
            let minBound = parseInt( minBoundString );
            let maxBound = parseInt( maxBoundString );

            if (ingredientID >= minBound && ingredientID <= maxBound ) {
                fresh = true;
            }
        }

        return fresh;
    }

    public countFreshIDs (): number {
        let counter = 0;

        for (let range of this.freshIngredientsIDsRanges) {
            if (range !== "") {
                let [ minBoundString, maxBoundString ] = range.split("-");
                let minBound = parseInt( minBoundString );
                let maxBound = parseInt( maxBoundString );
                counter += (maxBound - minBound) + 1;
            }
        }

        return counter;
    }

    private collapseRanges(): void {
        let ranges = this.freshIngredientsIDsRanges;

        for (let i = 0; i < ranges.length-1; i++) {

console.log(ranges);
            let first = ranges[i];

            if (first === "") {
                continue;
            }

            let [firstMinString, firstMaxString] = first.split("-");
            let firstMin = parseInt( firstMinString );
            let firstMax = parseInt( firstMaxString );
            let isCollapsed;

            for (let j = i+1; j < ranges.length; j++) {
                isCollapsed = false;
                let second = ranges[j];
                if (second === "") {
                    continue;
                }

                let [secondMinString, secondMaxString] = second.split("-");
                let secondMin = parseInt( secondMinString );
                let secondMax = parseInt( secondMaxString );

                if ( !(firstMax < secondMin || firstMin > secondMax) ) {
                    if (firstMin >= secondMin) {
                        if (firstMax <= secondMax) {
                            firstMin = secondMin;
                            firstMax = secondMax;
                            isCollapsed = true;
                        } else {
                            firstMin = secondMin;
                            isCollapsed = true;
                        }
                    } else {
                        if (firstMax >= secondMax) {
                            isCollapsed = true;
                        } else {
                            firstMax = secondMax;
                            isCollapsed = true;
                        }
                    }

                    if (isCollapsed) {
                        ranges[i] = `${firstMin}-${firstMax}`;
                        ranges[j] = ""
                        i--;
                    }
                }
            }
        }
    }
}