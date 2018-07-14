import { IGameStore } from "./game.reducer";

export const getVisibilityFilter = (state: IGameStore) => state.visibilityFilter;
