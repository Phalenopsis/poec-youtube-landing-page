import { HeaderGenerated } from "./HeaderGenerated.js";
import { DivGenerator } from "../generator/DivGenerator.js";
import { InputGenerator } from "../generator/InputGenerator.js";
import { ButtonGenerator } from "../generator/ButtonGenerator.js";

export class PageHeaderGenerated extends HeaderGenerated {
    constructor(node: HTMLElement) {
        super(node);
        this.addNavTools();
        this.addSearchTools();
        this.addUserTools();
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

    addSearchTools(): void {
        const container = DivGenerator.generate(["search-tools", "row", "centered"]);
        const searchContainer = DivGenerator.generate(["search-container", "centered"]);
        container.appendChild(searchContainer);
        const input = InputGenerator.generate(["search"], "search", "text", "Rechercher");
        searchContainer.appendChild(input);
        const button = ButtonGenerator.generate(["centered"]);
        container.appendChild(button);
        const searchLogo = DivGenerator.generate(["search-button"]);
        button.appendChild(searchLogo);
        this.node.appendChild(container);
    }

    addUserTools(): void {
        const container = DivGenerator.generate(["user-tools"]);
        this.node.appendChild(container);
    }
}