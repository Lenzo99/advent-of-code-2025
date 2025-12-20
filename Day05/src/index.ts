import { readFileInput } from "./reader";
import { InventoryManagementSystem } from "./solver";

let inputPath = "src/";
let inputFile = process.argv[2] || "input.sample.txt"
let inputData = readFileInput(inputFile, inputPath);

let splitterIndex = inputData.indexOf("");
let ranges = inputData.slice(0, splitterIndex);
let ids = inputData.slice(splitterIndex+1);
let ims = new InventoryManagementSystem(ranges, ids);

let pass1 = ims.countAvailableFreshIDs();
let pass2 = ims.countFreshIDs();

console.log(`\n`);
console.log(` password1: ${pass1}`);
console.log(` password2: ${pass2}`);