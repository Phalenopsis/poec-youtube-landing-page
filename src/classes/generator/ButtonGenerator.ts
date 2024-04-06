import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class ButtonGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
    ): HTMLElement {
        const button = HTMLElementGenerator.generate(classNames, id, null, "button");

        return button;
    }
}