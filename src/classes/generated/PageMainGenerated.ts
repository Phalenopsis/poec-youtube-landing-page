import { AbstractElementGenerated } from "./AbstractElementGenerated.js";
import { DivGenerator } from "../generator/DivGenerator.js";
import { InputGenerator } from "../generator/InputGenerator.js";
import { ButtonGenerator } from "../generator/ButtonGenerator.js";
import { AsideGenerator } from "../generator/AsideGenerator.js";
import { CardGenerated } from "./CardGenerated.js";
import { ArticleGenerator } from "./../generator/ArticleGenerator.js";
import { VideoInformation } from "../dataType/VideoInformation.js";
import { VideoManager } from "../manager/VideoManager.js";
import { SectionGenerator } from "./../generator/SectionGenerator.js";
import { CategorieManager } from "../manager/CategorieManager.js";
import { CategorieList } from "../dataType/CategorieList.js";

export class PageMainGenerated extends AbstractElementGenerated {
    public constructor(node: HTMLElement) {
        super(node);
        this.addAside();
        this.addMainContainer();
    }

    addAside() {
        const aside: HTMLElement = AsideGenerator.generate();
        this.node.appendChild(aside);
    }

    addArticle(data: VideoInformation, container: HTMLElement) {
        const card: CardGenerated = new CardGenerated(data);
        container.appendChild(card.node);
    }
    addMainContainer() {
        const mainContainer: HTMLElement = SectionGenerator.generate(["main-container"]);
        this.node.appendChild(mainContainer);
        mainContainer.appendChild(this.getFilterContainer());
        mainContainer.appendChild(this.getArticleContainer());
    }
    getFilterContainer(): HTMLElement {
        const filterContainer: HTMLElement = DivGenerator.generate(["filter-container"], "filter-container");
        this.getCategories(filterContainer)
        return filterContainer;
    }
    getArticleContainer(): HTMLElement {
        const articleContainer: HTMLElement = DivGenerator.generate(["article-container"], "article-container");
        this.getVideoCards(articleContainer);
        return articleContainer;
    }

    async getVideoCards(container: HTMLElement): Promise<void> {
        const videoManager: Promise<VideoManager> = VideoManager.build();
        //console.log((await videoManager).videoInformations)
        (await videoManager).videoInformations.forEach(element => {
            this.addArticle(element, container);
        });
    }
    async getCategories(container: HTMLElement): Promise<void> {
        const categorieManager: Promise<CategorieManager> = CategorieManager.build();
        const categories: CategorieList = (await categorieManager).categories;
        categories.forEach((elt) => {
            const filter = DivGenerator.generate(["filter"], elt.categorie, elt.categorie);
            container.appendChild(filter);
        })
    }
}