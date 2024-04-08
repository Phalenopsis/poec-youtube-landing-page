import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class InputGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        type: string,
        placeholder: string | null = null
    ): HTMLElement {
        const elt = HTMLElementGenerator.generate(classNames, id, null, "input");
        elt.setAttribute("type", type);
        placeholder != null ? elt.setAttribute("placeholder", placeholder) : '';
        return elt;
    }
}