import { Converter } from "./../classes/service/Converter.js";
import { TestInterface } from "./type/TestInterface.js"

export class Test {
    public static launchTests(): void {
        this.testConvertNumberToSymbol();
        this.testConvertDateStringToTimeElapsed();

    }

    private static testConvertNumberToSymbol(): void {
        let testsOk: number = 0;
        const tests: TestInterface[] = [
            {
                expected: "200",
                value: Converter.convertNumberToSymbol(200)
            },
            {
                expected: "2.0k",
                value: Converter.convertNumberToSymbol(2000)
            },
            {
                expected: "20.0k",
                value: Converter.convertNumberToSymbol(20000)
            },
            {
                expected: "20.1k",
                value: Converter.convertNumberToSymbol(20100)
            },
            {
                expected: "20.1M",
                value: Converter.convertNumberToSymbol(20100000)
            },
        ];

        tests.forEach((test) => {
            testsOk += this.assert(test.value, test.expected)
        })
        this.displayNumberTestsOk(testsOk);
    }

    private static testConvertDateStringToTimeElapsed(): void {
        let testsOk: number = 0;
        const tests: TestInterface[] = [
            {
                expected: "moins d'1 jour",
                value: Converter.convertDateStringToTimeElapsed("2024-04-07")
            },
            {
                expected: "1 jour",
                value: Converter.convertDateStringToTimeElapsed("2024-04-06")
            },
            {
                expected: "2 jours",
                value: Converter.convertDateStringToTimeElapsed("2024-04-05")
            },
            {
                expected: "1 mois",
                value: Converter.convertDateStringToTimeElapsed("2024-03-05")
            },
            {
                expected: "11 mois",
                value: Converter.convertDateStringToTimeElapsed("2023-05-10")
            },
            {
                expected: "1 an",
                value: Converter.convertDateStringToTimeElapsed("2023-04-01")
            },
            {
                expected: "11 ans",
                value: Converter.convertDateStringToTimeElapsed("2013-04-01")
            },
        ];
        tests.forEach((test) => {
            testsOk += this.assert(test.value, test.expected)
        })
        this.displayNumberTestsOk(testsOk);
    }

    private static displayNumberTestsOk(testsOk: number): void {
        console.log(`Nombre de tests réussis : ${testsOk}`);
    }

    private static assert(value: any, expected: any): number {
        if (value === expected) {
            return 1;
        } else {
            console.error(`Expected: ${expected}, returned: ${value}`);
        }
        return 0;
    }
} 