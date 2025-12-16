import { readInput } from "./reader";
import { computeLargestOutuputJoiltageFromBanks } from "./solver";

let inputFilePath: string = process.argv[2] || "src/input.sample.txt";
let banks: string[] = readInput(inputFilePath);
let passwordPt1: string = computeLargestOutuputJoiltageFromBanks(banks);

console.log("");
console.log("  Day 03. I still hate elves.");
console.log(`  password pt 1: ${passwordPt1}`);
console.log(`  password pt 2: - `);