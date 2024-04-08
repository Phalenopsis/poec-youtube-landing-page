import { CategorieList } from "./../dataType/CategorieList";

export class CategorieManager {
    #categories: CategorieList;
    private static api: string = "./../assets/source/categories.json";

    private constructor(Categories: CategorieList) {
        this.#categories = Categories;
    }

    public static async build(): Promise<CategorieManager> {
        const data = await fetch(this.api);
        const categorieJson = await data.json();
        return new CategorieManager(categorieJson);
    }

    get categories(): CategorieList {
        return this.#categories;
    }
} 