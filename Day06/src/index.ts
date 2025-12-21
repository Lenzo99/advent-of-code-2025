import { readInput } from "./reader";
import { solveWorksheetForHumans } from "./solver";
import { solveWorksheetForCephalopods } from "./solver";

let inputPath = "src/"
let inputExtension = ".txt";
let inputFile = process.argv[2] || "input.sample";
let inputContent = readInput(inputPath+inputFile+inputExtension);

let pass1 = solveWorksheetForHumans(inputContent);
let pass2 = solveWorksheetForCephalopods(inputContent);

console.log(``);
console.log(`  Inizio`);
console.log(`  pass1: ${pass1}`);
console.log(`  pass2: ${pass2}`);
console.log(`\n  Fine\n`);