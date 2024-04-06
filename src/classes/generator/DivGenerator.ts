export class DivGenerator {
    static generateDiv(classNames: string[] | null = null, id: string | null = null, content: string | null = null): HTMLElement {
        const div = document.createElement('div');
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