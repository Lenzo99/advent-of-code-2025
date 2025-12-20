export class Grid {
    private grid: string[][];
    private width: number;
    private height: number;
    private cellEmpty: string;
    private cellFull: string;
    private adjacents: number[][] = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    constructor (grid: string[][], cellEmpty: string, cellFull: string) {
        this.grid = grid;
        this.cellEmpty = cellEmpty;
        this.cellFull = cellFull;
        this.height = grid.length;
        this.width = grid[0].length;
    }

    public countRemovablePapersAll (): number {
        let counter = 0;
        let coordsValidPapers: number[][] = [[0]];

        while (coordsValidPapers.length) {
            coordsValidPapers = [];
            for (let row = 0; row < this.height; row++) {
                for (let col = 0; col < this.width; col++) {
                    if ( this.isFull(row, col) ) {
                        if ( this.countFullAdjacent(row, col) < 4 ) {
                            coordsValidPapers.push( [row, col] );
                            counter++;
                        }
                    }
                }
            }

            this.updateGrid(coordsValidPapers, this.cellEmpty);
        }

        return counter;
    }

    public updateGrid (positionsCells: number[][], char: string): number {
        let counterChanges = 0;
        for (let position of positionsCells) {
            let row = position[0];
            let col = position[1];
            this.grid[row][col] = char;
            counterChanges++;
        }
        return counterChanges;
    }

    public countRemovablePapers (): number {
        let counter = 0;

        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                if ( this.isFull(row, col) ) {
                    if ( this.countFullAdjacent(row, col) < 4 ) {
                        //this.grid[row][col] = "X";
                        counter++;
                    }
                }
            }
        }

        return counter;
    }

    public isFull (row: number, col: number): boolean {
        return (this.grid[row][col] === this.cellFull);
    }

    public countFullAdjacent (row: number, col: number): number {
        let counter = 0;

        for (let adjacent of this.adjacents) {
            let [offsetRow, offsetCol] = adjacent;
            let newRow = row + offsetRow;
            let newCol = col + offsetCol;

            if ( this.isValid(newRow, newCol) ) {
                if ( this.isFull(newRow, newCol) ) {
                    counter++;
                }
            }
        }

        return counter;
    }

    public isValid (row: number, col: number): boolean {
        let valid = true;

        if (row < 0 || row >= this.width || col < 0 || col >= this.height) valid = false;

        return valid;
    }

    public stampToScreen(): void {
        console.log("\n\n  Stamp:");
        for (let row = 0; row < this.height; row++) {
            let rowString = "";
            for (let col = 0; col < this.width; col++) {
                rowString += this.grid[row][col];
            }
            console.log(`  ${rowString}`);
        }
        console.log("");
    }

}