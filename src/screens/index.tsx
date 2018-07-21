import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { Store } from "redux";
import {
    HomeScreen,
    PyramidGameScreen
} from "../components/screens";
import { IAppStore } from "../redux/reducers";
import configureStore from "../redux/store";

const store = configureStore();

const withProvider = (
    ConnectedComponent: React.ComponentClass,
    connectStore: Store<IAppStore>
): React.ComponentClass => {

    return class extends Component<{}> {

        public render() {
            return (
                <Provider store={connectStore}>
                    <ConnectedComponent {...this.props} />
                </Provider>
            );
        }
    };
};

export const registerScreens = () => {
    Navigation.registerComponent("navigation.HomeScreen", () => withProvider(HomeScreen, store));
    Navigation.registerComponent("navigation.game.PyramidScreen", () => withProvider(PyramidGameScreen, store));
};
