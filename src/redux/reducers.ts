import { combineReducers } from "redux";
import gameReducer, { IGameStore, initialState as gameInitialState } from "./game/game.reducer";

export interface IAppStore {
    game: IGameStore;
}

export const initialState: IAppStore = {
    game: gameInitialState
};

const solitaireApp = combineReducers({
    game: gameReducer
});

export default solitaireApp;
