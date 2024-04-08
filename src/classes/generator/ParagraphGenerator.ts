import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class TitleGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string,
    ): HTMLElement {
        return HTMLElementGenerator.generate(classNames, id, content, "p");
    }
}