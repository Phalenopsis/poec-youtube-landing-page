import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class TitleGenerator {
    static generate(
        level: 1 | 2 | 3 | 4 | 5 | 6,
        content: string,
        classNames: string[] | null = null,
        id: string | null = null
    ): HTMLElement {
        const levelTitle: string = "h" + level;
        return HTMLElementGenerator.generate(classNames, id, content, levelTitle);
    }
}