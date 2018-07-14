import { combineReducers } from "redux";
import gameReducer from "./game/game.reducer";

const solitaireApp = combineReducers({
    game: gameReducer
});

export default solitaireApp;
