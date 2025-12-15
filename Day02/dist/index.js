"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reader_1 = require("./reader");
const solver_1 = require("./solver");
let inputFilePath = process.argv[2] || "src/input.sample.txt";
let ranges = (0, reader_1.readInput)(inputFilePath);
let password = 0;
for (let range of ranges) {
    let arrayRange = range.split("-");
    let bottomBound = parseInt(arrayRange[0]);
    let upperBound = parseInt(arrayRange[1]);
    for (let num = bottomBound; num <= upperBound; num++) {
        let strinNum = "" + num;
        if ((0, solver_1.isASequenceOfDigitsRepetedTwice)(strinNum)) {
            password += num;
        }
    }
}
console.log(password);
