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
import { FilterCards } from "../service/FilterCards.js";

export class PageMainGenerated extends AbstractElementGenerated {
    private categories: string[] = [];
    private static filters: string[] = [];
    private static filterEltList: HTMLElement[] = [];
    private static articleContainer: HTMLElement = DivGenerator.generate(["article-container"], "article-container");
    private static cardList: CardGenerated[] = [];
    private static cardDisplayedList: CardGenerated[] = [];

    public constructor(node: HTMLElement) {
        super(node);
        this.addAside();
        this.addMainContainer();
    }

    addAside() {
        const aside: HTMLElement = AsideGenerator.generate();
        this.node.appendChild(aside);
    }

    addArticle(data: VideoInformation) {
        const card: CardGenerated = new CardGenerated(data);
        PageMainGenerated.cardDisplayedList.push(card)
        PageMainGenerated.cardList.push(card);
        PageMainGenerated.articleContainer.appendChild(card.node);
    }

    addMainContainer() {
        const mainContainer: HTMLElement = SectionGenerator.generate(["main-container"]);
        this.node.appendChild(mainContainer);
        this.addFilterContainer(mainContainer);
        mainContainer.appendChild(PageMainGenerated.articleContainer);
        this.getVideoCards();
    }

    addFilterContainer(container: HTMLElement): void {
        const filterContainer: HTMLElement = DivGenerator.generate(["filter-container"], "filter-container");
        container.appendChild(filterContainer);
        this.getCategories(filterContainer)
    }



    async getVideoCards(): Promise<void> {
        const videoManager: Promise<VideoManager> = VideoManager.build();
        //console.log((await videoManager).videoInformations)
        (await videoManager).videoInformations.forEach(element => {
            this.addArticle(element);

        });
    }

    async getCategories(container: HTMLElement): Promise<void> {
        const categorieManager: Promise<CategorieManager> = CategorieManager.build();
        const categories: CategorieList = (await categorieManager).categories;
        const filterAll = DivGenerator.generate(["filter"], "all", "Tous");
        PageMainGenerated.filterEltList.push(filterAll);
        container.appendChild(filterAll);
        filterAll.addEventListener('click', this.filterVideo);
        this.categories.push("all");
        categories.forEach((elt) => {
            const filter = DivGenerator.generate(["filter"], elt.categorie, elt.categorie);
            container.appendChild(filter);
            this.categories.push(elt.categorie);
            PageMainGenerated.filterEltList.push(filter);
            filter.addEventListener('click', this.filterVideo);
        });

    }

    private filterVideo(e: Event) {
        if (e.target instanceof Element) {
            const filter = e.target.id;
            PageMainGenerated.updateFilters(filter);
        }
        PageMainGenerated.cardDisplayedList = FilterCards.filter(PageMainGenerated.cardList, PageMainGenerated.filters);
        PageMainGenerated.diplayVisibleCards();
    }

    private static updateFilters(filter: string) {
        if (filter === "all") {
            PageMainGenerated.resetFilters();
        } else {
            PageMainGenerated.toggleFilter(filter);
        }
    }

    private static resetFilters() {
        PageMainGenerated.filters = [];
        PageMainGenerated.filterEltList.forEach(element => {
            if (element.id !== "all") {
                element.classList.contains('on') ? element.classList.remove('on') : '';
            }
        });
    }

    private static toggleFilter(filter: string) {
        PageMainGenerated.toggleFilterElement(filter);
        PageMainGenerated.toggleFilterList(filter);
    }

    private static toggleFilterElement(filter: string) {
        const elt = document.getElementById(filter);
        if (elt !== null) {
            elt.classList.toggle("on");
        }
    }

    private static toggleFilterList(filter: string) {
        if (PageMainGenerated.filters.includes(filter)) {
            const index = PageMainGenerated.filters.indexOf(filter);
            PageMainGenerated.filters.splice(index, 1);
        } else {
            PageMainGenerated.filters.push(filter);
        }
    }

    private static diplayVisibleCards() {
        PageMainGenerated.resetArticleContainer();
        this.cardDisplayedList.forEach(card => {
            PageMainGenerated.articleContainer.appendChild(card.node);
        });
    }

    private static resetArticleContainer() {
        PageMainGenerated.articleContainer.innerHTML = '';
    }

    public static searchInVideoCardList(searchedTerm: string) {
        if (PageMainGenerated.filters.length === 0) PageMainGenerated.cardDisplayedList = PageMainGenerated.cardList;
        const result = PageMainGenerated.cardDisplayedList.filter((card) => card.searchInDescription(searchedTerm));
        PageMainGenerated.cardDisplayedList = result;
        PageMainGenerated.diplayVisibleCards();
    }
}