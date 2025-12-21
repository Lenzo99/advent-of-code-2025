export function solveWorksheetForHumans (worksheet: string[][]): number {
    let result = 0;

    for (let problem of worksheet) {
        result += solveProblemForHuman(problem);
    }

    return result;
}

function solveProblemForHuman (problem: string[]): number {
    let problemCopy = problem.map(e=>e);
    let operation = problemCopy.shift();
    let operators = problemCopy.map(e => parseInt(e) );
    let result = 0;
    if (operation === "+") {
        result = 0;
        operators.forEach(n => result += n );
    } if (operation === "*") {
        result = 1;
        operators.forEach(n => result *= n );
    }

    return result;
}

export function solveWorksheetForCephalopods (worksheet: string[][]): number {
    let result = 0;

    for (let problem of worksheet) {
        let problemCopy = problem.map(e=>e);
        let operation = problemCopy.shift();
        let amountDigits = problemCopy[0].length;
        let amountOperands = problemCopy.length;
        
        let operandsInteger = [];
        for (let digit = amountDigits-1; digit >= 0; digit--){
            let newOperant = "";
            for (let operand = 0; operand < amountOperands; operand++) {
                let digitString = problemCopy[operand][digit];
                if (digitString !== " ") {
                    newOperant += digitString;
                }
            }
            operandsInteger.push( parseInt(newOperant) );
        }

        let resProblem: number;
        if (operation === "+") {
            resProblem = 0;
            operandsInteger.forEach(val => resProblem += val );
        } else if (operation === "*") {
            resProblem = 1;
            operandsInteger.forEach(val => resProblem *= val );
        } else {
            resProblem = 0;
        }

        result += resProblem;
    }

    return result;
}