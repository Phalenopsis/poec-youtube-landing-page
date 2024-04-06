import { DivGenerator } from "./DivGenerator.js";
import { HeaderGenerator } from "./HeaderGenerator.js";
import { PageHeaderGenerated } from "./../generated/PageHeaderGenerated.js";

export class PageGenerator {
    static displayPage(): void {
        this.displayPageHeader();
        this.displayPageMain();
    }

    static displayPageHeader(): void {
        const header = new PageHeaderGenerated(
            HeaderGenerator.generate(["page-header"], "page-header"));
        document.body.appendChild(header.node);
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