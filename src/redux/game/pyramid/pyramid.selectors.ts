import { IPyramidStore } from "./pyramid.reducer";

export const getGameDeck = (state: IPyramidStore) => state.gameDeck;
export const getRemainderDeck = (state: IPyramidStore) => state.initialDeck;
