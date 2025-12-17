import * as fs from "fs";

export function readInput (path: string): string[] {
    let content: string = fs.readFileSync(path, "utf-8");
    let contentNoEmptyOutlines: string = content.trim();
    let banks: string[] = contentNoEmptyOutlines.split("\n");
    let fixedBanks: string[] = banks.map( el => el.replace("\r","") );

    return fixedBanks;
}