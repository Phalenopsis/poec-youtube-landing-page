import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class DivGenerator {
    static generateDiv(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string | null = null): HTMLElement {
        return HTMLElementGenerator.generateElement(classNames, id, content, "div");
    }
}