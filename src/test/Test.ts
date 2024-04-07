import { Converter } from "./../classes/service/Converter.js";
import { TestInterface } from "./TestInterface.js"

export class Test {
    public static launchTests(): void {
        this.testConvertDateStringToTimeElapsed();
    }

    private static testConvertDateStringToTimeElapsed(): void {
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