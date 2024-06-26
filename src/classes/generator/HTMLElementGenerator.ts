export class HTMLElementGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string | null = null,
        elementTag: string
    ): HTMLElement {
        const elt = document.createElement(elementTag);
        this.setClasses(elt, classNames);
        this.setId(elt, id);
        this.setContent(elt, content);
        return elt;
    }

    protected static setClasses(elt: HTMLElement, classNames: string[] | null) {
        if (!(null == classNames)) {
            classNames.forEach(className => {
                elt.classList.add(className);
            });
        }
    }

    protected static setId(elt: HTMLElement, id: string | null): void {
        if (!(null == id)) {
            elt.id = id;
        }
    }

    protected static setContent(elt: HTMLElement, content: string | null) {
        if (!(null == content)) {
            elt.innerText = content;
        }
    }

    protected static setAttribute(elt: HTMLElement, attributeValue: string | string[] | null, attribute: string): void {
        if (attributeValue == null) return;
        if (Array.isArray(attributeValue) && attribute == "class") {
            this.setClasses(elt, attributeValue);
        } else if (typeof attributeValue === "string") {
            elt.setAttribute(attribute, attributeValue);
        }
    }
}