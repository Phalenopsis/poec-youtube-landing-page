export class AbstractTest {
    public static launchTests(): void {

    }

    protected static displayNumberTestsOk(testsOk: number): void {
        console.log(`Nombre de tests réussis : ${testsOk}`);
    }

    protected static assert(value: any, expected: any): number {
        if (value === expected) {
            return 1;
        } else {
            console.error(`Expected: ${expected}, returned: ${value}`);
        }
        return 0;
    }

    protected static assertEquals(value: any, expected: any): number {
        for (const key in value) {
            if (value[key] !== expected[key]) {
                return 0;
            }
        }
        return 1;
    }
} 