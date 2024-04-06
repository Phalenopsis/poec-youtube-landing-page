import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class DivGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string | null = null): HTMLElement {
        return HTMLElementGenerator.generate(classNames, id, content, "div");
    }
}