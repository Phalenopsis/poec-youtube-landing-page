import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class HeaderGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string | null = null): HTMLElement {
        return HTMLElementGenerator.generate(classNames, id, content, "header");
    }
}