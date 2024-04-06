import { HeaderGenerator } from "./HeaderGenerator.js";
import { PageHeaderGenerated } from "./../generated/PageHeaderGenerated.js";
import { PageMainGenerated } from "./../generated/PageMainGenerated.js";
import { MainGenerator } from "./MainGenerator.js";

export class PageGenerator {
    static displayPage(): void {
        this.displayPageHeader();
        this.displayPageMain();
    }

    static displayPageHeader(): void {
        const header = new PageHeaderGenerated(
            HeaderGenerator.generate(["page-header"], "page-header")
        );
        document.body.appendChild(header.node);
    }

    static displayPageMain(): void {
        const main = new PageMainGenerated(
            MainGenerator.generate(["page-main"], "page-main")
        );
        document.body.appendChild(main.node);
    }
}