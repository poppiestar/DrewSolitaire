import { combineReducers } from "redux";
import pyramidGameReducer, {
    initialState as initialPyramidGameState,
    IPyramidStore
} from "./pyramid/pyramid.reducer";

export interface IGameStore {
    pyramid: IPyramidStore;
}

interface IGameAction {
    type: string;
    payload: any;
}

export const initialState: IGameStore = {
    pyramid: initialPyramidGameState
};

const gameReducer = combineReducers({
    pyramid: pyramidGameReducer
});

export default gameReducer;
