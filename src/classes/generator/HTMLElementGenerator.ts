export class HTMLElementGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        content: string | null = null,
        element: string): HTMLElement {
        const div = document.createElement(element);
        if (!(null == classNames)) {
            classNames.forEach(className => {
                div.classList.add(className);
            });
        }
        if (!(null == id)) {
            div.id = id;
        }
        if (!(null == content)) {
            div.innerText = content;
        }
        return div;
    }
}