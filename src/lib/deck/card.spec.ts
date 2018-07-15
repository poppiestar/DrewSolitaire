import Card, { Rank, Suit } from "./card";

describe("Card", () => {

    it("creates a card", () => {

        const actual = new Card("J", Suit.CLUB);

        expect(actual.rank).toEqual("J");
        expect(actual.suit).toEqual(Suit.CLUB);
        expect(actual.value).toEqual(11);
    });
});
