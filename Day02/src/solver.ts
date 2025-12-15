export function resolveRangesRepeats (
        ranges: string[],
        checkRepeats: (stringNumber: string) => boolean
    ): number {
    let result = 0;

    for (let range of ranges) {
        let arrayRange: string[] = range.split("-");
        let bottomBound = parseInt( arrayRange[0] );
        let upperBound = parseInt( arrayRange[1] );

        for(let num = bottomBound; num <= upperBound; num++) {
            let strinNum = ""+num;
            if ( checkRepeats(strinNum) ) {
                result += num;
            }
        }
    }

    return result;
}


export function isASequenceOfDigitsRepetedTwice (stringNumber: string): boolean {
    let isRepeted: boolean = false;
    let isTwicable: boolean = !(stringNumber.length % 2);
    
    if (isTwicable) {
        let halfLength = stringNumber.length / 2;
        let firstHalf = stringNumber.slice(0, halfLength);
        let secondHalf = stringNumber.slice(halfLength);
        if (firstHalf === secondHalf) {
            isRepeted = true;
        }
    }

    return isRepeted;
}

export function isASequenceOfDigitsRepeted (stringNumber: string): boolean {
    let isRepeted: boolean = false;
    let stringNumSize: number = stringNumber.length;
    let possibleSequenceSizes: number[] = checkMultiplier(stringNumSize);

    for (let size of possibleSequenceSizes) {
        let bottomIndex = 0;
        let upperIndex = bottomIndex + size;
        let sequences = [];

        for (; upperIndex <= size; bottomIndex += size, upperIndex += size) {
            let sequence = stringNumber.slice(bottomIndex, upperIndex);
            sequences.push( sequence );
        }

        isRepeted = sequences.every( el => el === sequences[0] );
        if( isRepeted ){
            break;
        }
    }

    return isRepeted;
}

function checkMultiplier(num: number): number[] {
    let multipliers: number[] = [];
    let startValue = Math.floor(num / 2);

    for(let multiplier = startValue; multiplier > 0; multiplier--) {
        if ( (num % multiplier) === 0 ) {
            multipliers.push(multiplier);
        }
    }

    return multipliers;
}