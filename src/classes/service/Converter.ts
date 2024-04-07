export class Converter {
    public static convertNumberToSymbol(num: number): string {
        if (num / 10 ** 6 > 1) return (num / 10 ** 6).toFixed(1) + "M";
        if (num / 10 ** 3 > 1) return (num / 10 ** 3).toFixed(1) + "k";
        return "" + num;
    }

    public static convertDateStringToTimeElapsed(dateString: string): string {
        const today: Date = new Date("2024-04-07");
        const dateToCompare: Date = new Date(dateString);
        const diffDays: number = this.getDifferenceBetween2Dates(today, dateToCompare);
        if (diffDays < 1) {
            return `moins d'1 jour`;
        }
        else if (diffDays === 1) {
            return `1 jour`;
        }
        else if (diffDays < 30) {
            return `${diffDays} jours`;
        } else if (diffDays < 365) {
            return `${Math.floor(diffDays / 30)} mois`;
        } else {
            const yearNumber = Math.floor(diffDays / 365);
            return `${yearNumber} an${yearNumber > 1 ? 's' : ''}`;
        }
    }

    private static getDifferenceBetween2Dates(date1: Date, date2: Date) {
        const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
        const diffTime = Math.abs(date1.getTime() - date2.getTime());
        const diffDays = Math.ceil(diffTime / MILLISECONDS_PER_DAY);
        return diffDays;
    }
}