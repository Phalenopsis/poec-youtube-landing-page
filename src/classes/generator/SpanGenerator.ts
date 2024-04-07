import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class SpanGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string,
    ): HTMLElement {
        return HTMLElementGenerator.generate(classNames, id, content, "span");
    }
}