export class HTMLElementGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string | null = null,
        elementName: string
    ): HTMLElement {
        const elt = document.createElement(elementName);
        this.setClasses(elt, classNames);
        this.setId(elt, id);
        this.setContent(elt, content);
        return elt;
    }

    private static setClasses(elt: HTMLElement, classNames: string[] | null) {
        if (!(null == classNames)) {
            classNames.forEach(className => {
                elt.classList.add(className);
            });
        }
    }

    private static setId(elt: HTMLElement, id: string | null): void {
        if (!(null == id)) {
            elt.id = id;
        }
    }

    private static setContent(elt: HTMLElement, content: string | null) {
        if (!(null == content)) {
            elt.innerText = content;
        }
    }
}