
declare module "card-deck" {
    class Deck {
        constructor(cards: any[]);
        addRandom: (cards: any[]) => Deck;
        addToBottom: (cards: any[]) => Deck;
        addToTop: (cards: any[]) => Deck;
        bottom: (count: number) => any[];
        cards: (cards: any[]) => Deck;
        draw: (count: number) => any[];
        drawFromBottom: (count: number) => any[];
        drawRandom: (count: number) => any[];
        drawWhere: (count: number) => any[];
        random: (count: number) => any[];
        remaining: () => number;
        shuffle: () => Deck;
        shuffleToBottom: (cards: any[]) => Deck;
        shuffleToTop: (cards: any[]) => Deck;
        top: (count: number) => any[];
    }

    export default Deck;
}
