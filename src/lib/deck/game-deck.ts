import Deck from "card-deck";
import Card, { Rank, Suit } from "./card";

class GameDeck {

    private deckCards: Deck;

    public constructor(initialDeck: Deck = null) {
        this.deckCards = this.generateDeck();
    }

    get cards() {
        return this.deckCards;
    }

    get length() {
        return this.deckCards.remaining();
    }

    public shuffle(): Card[] {
        // TODO
        const newDeck: Card[] = [];

        return newDeck;
    }

    public deal(count: number = 1): Card[] {
        if (this.length > 0) {
            return this.deckCards.draw(count);
        } else {
            throw new Error("Deck is empty");
        }
    }

    public generateDeck(): Deck {
        const deck: Card[] = [];

        for (const suit of [0, 1, 2, 3]) {
            for (const rank of ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T",  "J", "Q", "K"]) {
                deck.push(new Card(rank as Rank, suit));
            }
        }

        console.log("DECK", deck);
        return new Deck(deck);
    }

    private duplicate(originalDeck: Deck): Card[] {
        // TODO
        const newDeck: Card[] = [];

        return newDeck;
    }
}

export default GameDeck;
