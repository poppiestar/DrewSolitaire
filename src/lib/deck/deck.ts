import Card, { Rank, Suit } from "./card";

class Deck {

    private deckCards: Card[];

    public constructor(initialDeck: Deck = null) {
        this.deckCards = this.generateDeck();
    }

    get cards() {
        return this.deckCards;
    }

    get length() {
        return this.deckCards.length;
    }

    public shuffle(): Card[] {
        // TODO
        const newDeck: Card[] = [];

        return newDeck;
    }

    public deal(): Card {
        if (this.length > 0) {
            return this.deckCards.pop();
        } else {
            throw new Error("Deck is empty");
        }
    }

    private generateDeck(): Card[] {
        const deck: Card[] = [];

        // for (const suit in Suit) {
        //     for (const rank in Rank) {

        //     }
        // }

        return deck;
    }

    private duplicate(originalDeck: Deck): Card[] {
        // TODO
        const newDeck: Card[] = [];

        return newDeck;
    }
}

export default Deck;
