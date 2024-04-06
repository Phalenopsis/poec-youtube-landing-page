import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class HeaderGenerator {
    static generateHeader(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string | null = null): HTMLElement {
        return HTMLElementGenerator.generateElement(classNames, id, content, "header");
    }
}