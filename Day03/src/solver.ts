export default function computeLargestOutuputJoiltageFromBanks (banks: string[], batteriesAmount: number): string {
    let largestOutputJoltage = 0;

    for (let bank of banks) {
        largestOutputJoltage += exctractLargestJoiltage(bank, batteriesAmount);
    }

    return ""+largestOutputJoltage;
}

function exctractLargestJoiltage (bank: string, batteriesAmount: number): number {
    let bankSize: number = bank.length;
    let indexBatteryLargest: number = -1;
    let indexLastBatteryInBank: number = bankSize - 1;
    let joiltageLargest: string = "";
    
    for (let batteriesFound = 0; batteriesFound < batteriesAmount; batteriesFound++) {
        let batteriesToFind: number = batteriesAmount - batteriesFound;
        let indexL: number = indexBatteryLargest + 1;
        let indexR: number = indexLastBatteryInBank - (batteriesToFind - 1);
        let batteryLargest: string = "0";

        for (let indexScrollBatteries = indexL; indexScrollBatteries <= indexR; indexScrollBatteries++) {
            if (bank[indexScrollBatteries] > batteryLargest) {
                batteryLargest = bank[indexScrollBatteries];
                indexBatteryLargest = indexScrollBatteries;
            }
        }

        joiltageLargest += batteryLargest;
    }

    return parseInt(joiltageLargest);
}

function exctractLargestJoiltageWithTwoBatteries (bank: string): number {
    let digits = bank.split("");
    let digitsAmount: number = digits.length;
    let largestJoltage: number = 0;

    let test = [];

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