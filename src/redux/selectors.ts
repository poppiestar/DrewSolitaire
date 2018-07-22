import { Deck } from "../lib";
import * as fromGame from "./game/game.selectors";
import * as fromGamePyramid from "./game/pyramid/pyramid.selectors";
import { IAppStore } from "./reducers";

// game
export const getVisibilityFilter = (state: IAppStore) => fromGame.getVisibilityFilter(state.game);

// game pyramid
export const getGameDeck = (state: IAppStore): Deck => fromGamePyramid.getGameDeck(state.game.pyramid);
export const getRemainderDeck = (state: IAppStore): Deck => fromGamePyramid.getRemainderDeck(state.game.pyramid);
