import * as fs from "fs";

export function readInput(pathFile: string): string[][] {
    let content = readFile(pathFile);
    let lines = content.split("\r\n");
    let indexOperationsLine = lines.length - 1;

    let operations = lines[indexOperationsLine].match(/[*+]\s+/g) ?? [];
    let problems = [];
    let sizes = [];

    for (let operation of operations) {
        problems.push( [operation.trim()] );
        sizes.push( operation.length - 1 );
    }
    sizes[ sizes.length - 1 ]++;

    let amountProblems = problems.length;
    let amountOperands = lines.length - 1;
    let start = 0;
    let end = 0;
    for (let col = 0; col < amountProblems; col++) {
        end = start + sizes[col];
        for (let row = 0; row < amountOperands; row++) {
            let operand = lines[row].slice(start, end);
            problems[col].push( operand );
        }
        start += sizes[col] + 1;
    }
    
// console.log(`\n content`);
// console.log(JSON.stringify(content));
// console.log(`\n lines`);
// console.log(lines);
// console.log(`\n operations`);
// console.log(operations);
// console.log(`\n problem`);
// console.log(problems);
// console.log(`\n sizes`);
// console.log(sizes);

    return problems;
}

function readFile (pathFile: string): string {
    return fs.readFileSync(pathFile, "utf-8");
}