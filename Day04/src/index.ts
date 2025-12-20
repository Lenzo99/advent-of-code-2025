import { readFileInput } from "./reader";
import { Grid } from "./solver";

let inputPath = "src/";
let inputFile = process.argv[2] || "input.sample.txt"
let inputData = readFileInput(inputFile, inputPath);
let grid = new Grid(inputData, ".", "@");
let pass1 = grid.countRemovablePapers();
let pass2 = grid.countRemovablePapersAll();

console.log(`\n`);
console.log(` password1: ${pass1}`);
console.log(` password2: ${pass2}`);