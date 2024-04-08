import { CardGenerated } from "./../generated/CardGenerated";

export class FilterCards {
    public static filter(cards: CardGenerated[], filter: string[]): CardGenerated[] {
        const cardsFiltered: CardGenerated[] = [];
        if (filter.length === 0 || filter.includes("all")) return cards;

        for (const card of cards) {
            this.compare(filter, card.getCategorie()) ? cardsFiltered.push(card) : '';
        }
        return cardsFiltered;
    }

    private static compareArray(arrayOne: any[], arrayTwo: any[]): boolean {
        if (arrayOne.length !== arrayTwo.length) return false;
        else {
            // Comparing each element of your array
            for (var i = 0; i < arrayOne.length; i++) {
                if (arrayOne[i] !== arrayTwo[i]) {
                    return false;
                }
            }
            return true;
        }
    }

    private static compare(filterList: any[], cardList: any[]): boolean {
        let nbCompareOk: number = 0;
        for (let i: number = 0; i < filterList.length; i += 1) {
            if (cardList.includes(filterList[i])) {
                nbCompareOk += 1;
            }
        }
        console.log(nbCompareOk, filterList.length);
        return nbCompareOk === filterList.length;

    }
}