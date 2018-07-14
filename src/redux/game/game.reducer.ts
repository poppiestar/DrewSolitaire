import { SET_VISIBILITY_FILTER } from "./game.actions";

export interface IGameStore {
    visibilityFilter: string;
}

interface IGameAction {
    type: string;
    payload: any;
}

export const initialState: IGameStore = {
    visibilityFilter: "off",
};

const gameReducer = (state: IGameStore = initialState, action: IGameAction): IGameStore => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return setVisibilityFilter(state, action);

        default:
            return state;
    }
};

export default gameReducer;

const setVisibilityFilter = (state: IGameStore, { payload }: IGameAction): IGameStore => ({
    ...state,
    visibilityFilter: payload
});
