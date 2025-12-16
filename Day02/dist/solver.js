"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRangesRepeats = resolveRangesRepeats;
exports.isASequenceOfDigitsRepetedTwice = isASequenceOfDigitsRepetedTwice;
exports.isASequenceOfDigitsRepeted = isASequenceOfDigitsRepeted;
function resolveRangesRepeats(ranges, checkRepeats) {
    let result = 0;
    for (let range of ranges) {
        let arrayRange = range.split("-");
        let bottomBound = parseInt(arrayRange[0]);
        let upperBound = parseInt(arrayRange[1]);
        for (let num = bottomBound; num <= upperBound; num++) {
            let strinNum = "" + num;
            if (checkRepeats(strinNum)) {
                result += num;
            }
        }
    }
    return result;
}
function isASequenceOfDigitsRepetedTwice(stringNumber) {
    let isRepeted = false;
    let isTwicable = !(stringNumber.length % 2);
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
function isASequenceOfDigitsRepeted(stringNumber) {
    let isRepeted = false;
    let stringNumSize = stringNumber.length;
    let possibleSequenceSizes = checkMultiplier(stringNumSize);
    for (let sequenceSize of possibleSequenceSizes) {
        let bottomIndex = 0;
        let upperIndex = bottomIndex + sequenceSize;
        let sequences = [];
        for (; upperIndex <= stringNumSize; bottomIndex += sequenceSize, upperIndex += sequenceSize) {
            let sequence = stringNumber.slice(bottomIndex, upperIndex);
            sequences.push(sequence);
        }
        isRepeted = sequences.every((el) => el === sequences[0]);
        if (isRepeted) {
            break;
        }
    }
    return isRepeted;
}
function checkMultiplier(num) {
    let multipliers = [];
    let startValue = Math.floor(num / 2);
    for (let multiplier = startValue; multiplier > 0; multiplier--) {
        if ((num % multiplier) === 0) {
            multipliers.push(multiplier);
        }
    }
    return multipliers;
}
