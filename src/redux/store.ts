import { applyMiddleware, createStore } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import reducers, { IAppStore, initialState } from "./reducers";

let middleware: any = [];

if (__DEV__) {
    middleware = [
        ...middleware,
        reduxImmutableStateInvariant()
    ];
}

const configureStore = (state: IAppStore = initialState) =>
    createStore(
        reducers,
        state,
        applyMiddleware(
            ...middleware
        )
    );

export default configureStore;
