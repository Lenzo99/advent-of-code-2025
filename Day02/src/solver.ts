export function isASequenceOfDigitsRepetedTwice (stringNumber: string): boolean {
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