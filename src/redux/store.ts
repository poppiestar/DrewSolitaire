import { applyMiddleware, compose, createStore } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "remote-redux-devtools";
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
        compose(
            applyMiddleware(
                ...middleware
            )
        )
    );

export default configureStore;
