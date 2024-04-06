export class PageGenerator {
    static displayPage(): void {
        this.displayPageHeader();
        this.displayPageMain();
    }

    static displayPageHeader(): void {
        const header = document.createElement("header");
        header.classList.add("page-header");
        header.id = "page-header";
        document.body.appendChild(header);
    }

    static displayPageMain(): void {
        const main = document.createElement("main");
        main.classList.add("page-main");
        main.id = "page-main";
        document.body.appendChild(main);
    }
}