import { readInput } from "./reader";
import computeJoiltageByBatteries from "./solver";

let inputFile: string = process.argv[2] || "input.sample.txt";
let inputPath: string = "src/";
let banks: string[] = readInput( inputPath + inputFile );
let passwordPt1: string = computeJoiltageByBatteries(banks, 2);
let passwordPt2: string = computeJoiltageByBatteries(banks, 12);

console.log("");
console.log("  Day 03. I REALLY hate elves.");
console.log(`  password pt 1: ${passwordPt1}`);
console.log(`  password pt 2: ${passwordPt2}`);