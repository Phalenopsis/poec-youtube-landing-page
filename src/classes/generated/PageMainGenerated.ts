import { AbstractElementGenerated } from "./AbstractElementGenerated.js";
import { DivGenerator } from "../generator/DivGenerator.js";
import { InputGenerator } from "../generator/InputGenerator.js";
import { ButtonGenerator } from "../generator/ButtonGenerator.js";
import { AsideGenerator } from "../generator/AsideGenerator.js";

export class PageMainGenerated extends AbstractElementGenerated {

    public constructor(node: HTMLElement) {
        super(node);
        this.addAside();
    }

    addAside() {
        const aside = AsideGenerator.generate();
        this.node.appendChild(aside);
    }
}