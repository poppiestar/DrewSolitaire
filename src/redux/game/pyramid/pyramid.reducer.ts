import { Deck } from "../../../lib";
import {
    NEW_GAME_PYRAMID,
    RESTART_GAME_PYRAMID,
} from "./pyramid.actions";

export interface IPyramidStore {
    gameDeck: Deck;
    initialDeck: Deck;
}

interface IGameAction {
    type: string;
    payload: any;
}

export const initialState: IPyramidStore = {
    gameDeck: null,
    initialDeck: null
};

const pyramidReducer = (state: IPyramidStore = initialState, action: IGameAction): IPyramidStore => {
    switch (action.type) {
        case NEW_GAME_PYRAMID:
            return newGamePyramid(state, action);

        case RESTART_GAME_PYRAMID:
            return restartGamePyramid(state);

        default:
            return state;
    }
};

export default pyramidReducer;

// generate a new deck and shuffle it, then set it as the initialDeck and the gameDeck
const newGamePyramid = (state: IPyramidStore, { payload }: IGameAction): IPyramidStore => ({
    ...state,
    initialDeck: payload
});

// sets the gameDeck to be the same as the initialDeck
const restartGamePyramid = (state: IPyramidStore): IPyramidStore => ({
    ...state,
    gameDeck: state.gameDeck
});

// const duplicateDeck = (deck: Deck): Deck => {
//     // this won't work, it's returning references to the original deck - need to create new cards
//     return deck.map((card) => card);
// };
