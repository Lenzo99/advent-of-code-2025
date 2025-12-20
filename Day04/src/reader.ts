import * as fs from "fs";

export function readFileInput(file: string, path: string = ""): string[][] {
    let content = readFile(file, path);
    let rows: string[] = content.split("\r\n");
    let matrix: string [][] = [];
    rows.forEach( e => matrix.push( e.split("") ) );

    return matrix;
}

function readFile (file: string, path: string = ""): string {
    return fs.readFileSync(path+file, "utf-8").trim();
}