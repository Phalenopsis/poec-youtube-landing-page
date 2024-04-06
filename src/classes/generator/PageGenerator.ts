import { DivGenerator } from "./DivGenerator.js";
import { HeaderGenerator } from "./HeaderGenerator.js";

export class PageGenerator {
    static displayPage(): void {
        this.displayPageHeader();
        this.displayPageMain();
    }

    static displayPageHeader(): void {
        const header = HeaderGenerator.generate(["page-header"], "page-header");
        document.body.appendChild(header);
    }

    static displayPageMain(): void {
        const main = document.createElement("main");
        main.classList.add("page-main");
        main.id = "page-main";
        document.body.appendChild(main);
        const test = DivGenerator.generate(["green", "big"], "greenId", "le petit chat vert");
        main.appendChild(test);
    }
}