import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class SectionGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null
    ): HTMLElement {
        return HTMLElementGenerator.generate(classNames, id, null, "section");
    }
}