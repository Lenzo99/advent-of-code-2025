import * as fs from "fs";

export function readFileInput(file: string, path: string = ""): string[] {
    let content = readFile(file, path).trim();
    let lines: string[] = content.split("\r\n");
    return lines;
}

function readFile (file: string, path: string = ""): string {
    return fs.readFileSync(path+file, "utf-8").trim();
}