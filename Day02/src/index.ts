import { readInput } from "./reader";
import { resolveRangesRepeats, 
    isASequenceOfDigitsRepeted, 
    isASequenceOfDigitsRepetedTwice } from "./solver";

let inputFilePath: string = process.argv[2] || "src/input.sample.txt";
let ranges: string[] = readInput(inputFilePath);
let password1: number = resolveRangesRepeats(ranges, isASequenceOfDigitsRepetedTwice);
let password2: number = resolveRangesRepeats(ranges, isASequenceOfDigitsRepeted);

console.log("");
console.log("  = = = = = = = = = = ");
console.log(`  Stupidi elfi. Eseguito con input da "${inputFilePath}".`);
console.log(`  Soluzione 1 : ${password1}`);
console.log(`  Soluzione 2 : ${password2}`);