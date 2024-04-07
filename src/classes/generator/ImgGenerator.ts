import { HTMLElementGenerator } from "./HTMLElementGenerator.js";

export class ImgGenerator extends HTMLElementGenerator {
    static generate(
        classNames: string[] | null = null,
        id: string | null = null,
        src: string | null = null,
        alt: string = ''
    ): HTMLImageElement {
        const img = new Image();
        this.setClasses(img, classNames);
        this.setId(img, id);
        this.setSrc(img, src);
        this.setAlt(img, "alt");
        return img;
    }

    private static setSrc(img: HTMLImageElement, src: string | null): void {
        this.setAttribute(img, src, "src");
    }

    private static setAlt(img: HTMLImageElement, src: string | null): void {
        this.setAttribute(img, src, "alt");
    }
}