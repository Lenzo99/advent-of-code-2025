import { readInput } from "./reader";
import { isASequenceOfDigitsRepetedTwice } from "./solver";

let inputFilePath: string = process.argv[2] || "src/input.sample.txt";
let ranges: string[] = readInput(inputFilePath);
let password = 0;

for (let range of ranges) {
    let arrayRange: string[] = range.split("-");
    let bottomBound = parseInt( arrayRange[0] );
    let upperBound = parseInt( arrayRange[1] );

    for(let num = bottomBound; num <= upperBound; num++) {
        let strinNum = ""+num;
        if ( isASequenceOfDigitsRepetedTwice(strinNum) ) {
            password += num;
        }
    }
}

console.log(password);