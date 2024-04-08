import { AbstractElementGenerated } from "./AbstractElementGenerated.js";
import { DivGenerator } from "../generator/DivGenerator.js";
import { InputGenerator } from "../generator/InputGenerator.js";
import { ButtonGenerator } from "../generator/ButtonGenerator.js";
import { UserIcon } from "./UserIcon.js";
import { PageMainGenerated } from "./PageMainGenerated.js";

export class PageHeaderGenerated extends AbstractElementGenerated {
    constructor(node: HTMLElement) {
        super(node);
        this.addNavTools();
        this.addSearchTools();
        this.addUserTools();
    }

    private addNavTools(): void {
        const container = DivGenerator.generate(["nav-tools", "row"]);
        container.appendChild(this.getBurger());
        container.appendChild(this.getYoutubeLogo());
        this.node.appendChild(container);
    }

    private getBurger(): HTMLElement {
        const burgerContainer = DivGenerator.generate(["burger-container", "centered"]);
        const menu = DivGenerator.generate(["burger"]);
        burgerContainer.appendChild(menu);
        return burgerContainer;
    }

    private getYoutubeLogo(): HTMLElement {
        const youtubeLogo = DivGenerator.generate(["logo"], null, "Youtube");
        return youtubeLogo;
    }

    private addSearchTools(): void {
        const container = DivGenerator.generate(["search-tools", "row", "centered"]);
        container.appendChild(this.getBlank());
        container.appendChild(this.getSearchContainer());
        container.appendChild(this.getSearchButton());
        this.node.appendChild(container);
    }

    private getBlank(): HTMLElement {
        const blank = DivGenerator.generate(["blank"]);
        return blank;
    }

    private getSearchContainer(): HTMLElement {
        const searchContainer = DivGenerator.generate(["search-container", "centered"]);
        const searchIcon = DivGenerator.generate(["search-icon"]);
        searchContainer.appendChild(searchIcon);
        const input = InputGenerator.generate(["search"], "search-input", "text", "Rechercher");
        searchContainer.appendChild(input);
        return searchContainer;
    }

    private getSearchButton(): HTMLElement {
        const button = ButtonGenerator.generate(["centered"]);
        button.addEventListener("click", this.search)
        const searchLogo = DivGenerator.generate(["search-button"]);
        button.appendChild(searchLogo);
        return button;
    }

    private addUserTools(): void {
        const container = DivGenerator.generate(["user-tools", "row", "centered"]);
        container.appendChild(this.getCameraButton());
        container.appendChild(this.getBellButton());
        container.appendChild(this.getUserIcon());
        this.node.appendChild(container);
    }

    private getCameraButton(): HTMLElement {
        const cameraButton = ButtonGenerator.generate(["icon", "centered"]);
        const cameraIcon = DivGenerator.generate(["camera"]);
        cameraButton.appendChild(cameraIcon);
        return cameraButton;
    }

    private getBellButton(): HTMLElement {
        const bellButton = ButtonGenerator.generate(["icon", "centered"]);
        const bellIcon = DivGenerator.generate(["bell"]);
        bellButton.appendChild(bellIcon);
        return bellButton;
    }

    private getUserIcon(): HTMLElement {
        const userIcon = new UserIcon("P", "white", "red").node;
        return userIcon;
    }

    private search(): void {
        const input = document.getElementById("search-input");
        if (input instanceof HTMLInputElement) {
            const searched = input.value.trim().toLowerCase();
            PageMainGenerated.searchInVideoCardList(searched);

        }
        // parcourir les infos
        // si searched dans info => garder la card
        // afficher les cards gardées 
    }
}