import * as fs from "fs";

export function readInput(path: string): string[] {
    let content: string = fs.readFileSync(path, "utf-8");
    let contentNoEmptyOutlines: string = content.trim();
    const lines: string[] = contentNoEmptyOutlines.split("\n");
    return lines;
}