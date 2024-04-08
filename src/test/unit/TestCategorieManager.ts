import { AbstractTest } from "../AbstractTest.js";
import { TestType } from "../type/TestType.js"
import { CategorieManager } from "../../classes/manager/CategorieManager.js";

export class TestCategorieManager extends AbstractTest {
    public static launchTests(): void {
        this.testGetCategories();
    }

    private static async testGetCategories(): Promise<void> {
        let testsOk: number = 0;

        const tests: TestType[] = [
            {
                expected: {
                    "categorie": "nature"
                },
                value: (await CategorieManager.build()).categories[0]
            },
        ];

        tests.forEach((test) => {
            testsOk += this.assertEquals(test.value, test.expected)
        })
        this.displayNumberTestsOk(testsOk);
    }
} 