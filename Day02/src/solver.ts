export function resolveRangesRepeats (
        ranges: string[],
        checkRepeats: (stringNumber: string) => boolean
    ): number {

    let result: number = 0;
    for (let range of ranges) {
        let arrayRange: string[] = range.split("-");
        let bottomBound: number = parseInt( arrayRange[0] );
        let upperBound: number = parseInt( arrayRange[1] );

        for(let num = bottomBound; num <= upperBound; num++) {
            let strinNum: string = ""+num;
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
        let halfLength: number = stringNumber.length / 2;
        let firstHalf: string = stringNumber.slice(0, halfLength);
        let secondHalf: string = stringNumber.slice(halfLength);
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

    for (let sequenceSize of possibleSequenceSizes) {
        let bottomIndex: number = 0;
        let upperIndex: number = bottomIndex + sequenceSize;
        let sequences: string[] = [];

        for (; upperIndex <= stringNumSize; bottomIndex += sequenceSize, upperIndex += sequenceSize) {
            let sequence: string = stringNumber.slice(bottomIndex, upperIndex);
            sequences.push( sequence );
        }

        isRepeted = sequences.every( (el: string): boolean => el === sequences[0] )
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