export function computeLargestOutuputJoiltageFromBanks (banks: string[]): string {
    let largestOutputJoltage = 0;

    for (let bank of banks) {
        largestOutputJoltage += exctractLargestJoiltageFromBank(bank);
    }

    return ""+largestOutputJoltage;
}

function exctractLargestJoiltageFromBank (bank: string): number {
    let digits: string[] = bank.split("");
    let digitsAmount: number = digits.length;
    let largestJoltage: number = 0;

    for (let i = 0; i < digitsAmount-1; i++) {
        for (let j = i+1; j < digitsAmount; j++) {
            let stringJoiltage:string = ""+digits[i]+digits[j];
            let joiltage = parseInt( stringJoiltage );

            if (joiltage > largestJoltage ) {
                largestJoltage = joiltage;
            }
        }
    }

    return largestJoltage;
}