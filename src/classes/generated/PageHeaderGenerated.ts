import { HeaderGenerated } from "./HeaderGenerated.js";
import { DivGenerator } from "../generator/DivGenerator.js";

export class PageHeaderGenerated extends HeaderGenerated {
    constructor(node: HTMLElement) {
        super(node);
        this.addNavTools();
    }

    addNavTools(): void {
        const container = DivGenerator.generate(["nav-tools", "row"]);
        container.appendChild(this.addBurger());
        const title = DivGenerator.generate(["logo"], null, "Youtube");
        container.appendChild(title);
        this.node.appendChild(container);
    }

    addBurger(): HTMLElement {
        const burgerContainer = DivGenerator.generate(["burger-container", "centered"]);
        const menu = DivGenerator.generate(["burger"]);
        burgerContainer.appendChild(menu);
        return burgerContainer;
    }

}