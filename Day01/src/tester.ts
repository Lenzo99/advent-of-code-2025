import { readInput } from "./reader";
import { Dial } from "./main";

let startPosition = parseInt(process.argv[2]) || 50;
let inputFilePath = process.argv[3] || "src/input.sample.txt";
let isDisplayingActions = process.argv[4] || false;
let actions = readInput(inputFilePath);
let counterZeros = 0;
let dial = new Dial(0, 99);
dial.setPosition(startPosition);

console.log("");
console.log(`  Computing "${inputFilePath}".`);
console.log(`  Dial at start {${dial}}.`);
for (let action of actions) {
    counterZeros += dial.rotateCountingMinTouches(action);
    if ( isDisplayingActions ) {
        console.log(`${action.slice(0, -1)}  ${dial.getPosition()}  ${counterZeros}`);
    }
}
console.log(`  Touches zero ${counterZeros} times.`);