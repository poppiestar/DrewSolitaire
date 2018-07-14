import * as fromGame from "./game/game.selectors";
import { IAppStore } from "./reducers";

export const getVisibilityFilter = (state: IAppStore) => fromGame.getVisibilityFilter(state.game);
