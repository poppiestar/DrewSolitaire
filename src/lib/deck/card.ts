
export enum Suit {
    CLUB,
    SPADE,
    HEART,
    DIAMOND
}

export type Rank = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K";

class Card {

    private cardSuit: Suit;
    private cardRank: Rank;

    public constructor(rank: Rank, suit: Suit) {
        this.cardRank = rank;
        this.cardSuit = suit;
    }

    get suit(): Suit {
        return this.cardSuit;
    }

    get rank(): Rank {
        return this.cardRank;
    }

    get value(): number {
        // tslint:disable:object-literal-key-quotes object-literal-sort-keys
        const values: { [rank: string]: number } = {
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "10": 10,
            "J": 11,
            "Q": 12,
            "K": 13
        };
        // tslint:enable:object-literal-key-quotes object-literal-sort-keys

        return values[this.cardRank];
    }
}

export default Card;
