export class PageGenerator {
    static displayPage(): void {
        this.displayPageHeader();
    }

    static displayPageHeader(): void {
        const header = document.createElement("header");
        header.classList.add("page-header");
        header.id = "page-header";
        document.body.appendChild(header);
    }
}