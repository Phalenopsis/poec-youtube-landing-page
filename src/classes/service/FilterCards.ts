import { CardGenerated } from "./../generated/CardGenerated";

export class FilterCards {
    public static filter(cards: CardGenerated[], filter: string[]): CardGenerated[] {
        const cardsFiltered: CardGenerated[] = [];
        for (const card of cards) {
            this.compareArray(card.getCategorie(), filter) ? cardsFiltered.push(card) : '';
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
}