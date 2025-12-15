import * as fs from "fs";

export function readInput (path: string): string[]{
    let content: string = fs.readFileSync(path, "utf-8");
    let contentNoEmptyOutlines = content.trim();
    let ranges = contentNoEmptyOutlines.split(",");
    return ranges;
}