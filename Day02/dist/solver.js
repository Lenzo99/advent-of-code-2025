"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isASequenceOfDigitsRepetedTwice = isASequenceOfDigitsRepetedTwice;
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
