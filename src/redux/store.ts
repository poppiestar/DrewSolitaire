import { applyMiddleware, compose, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import reducers, { IAppStore, initialState } from "./reducers";

const middleware: any = [reduxImmutableStateInvariant()];

const configureStore = (state: IAppStore = initialState): Store<IAppStore> =>
    createStore(
        reducers,
        state,
        composeWithDevTools(
            applyMiddleware(
                ...middleware
            )
        )
    );

export default configureStore;
