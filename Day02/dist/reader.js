"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInput = readInput;
const fs = require("fs");
function readInput(path) {
    let content = fs.readFileSync(path, "utf-8");
    let contentNoEmptyOutlines = content.trim();
    let ranges = contentNoEmptyOutlines.split(",");
    return ranges;
}
