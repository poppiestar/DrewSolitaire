import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { HomeScreen } from "../components/screens";
import configureStore from "../redux/store";

const store = configureStore();

class ConnectedHomeScreen extends Component<{}> {
    public render() {
        return (
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        );
    }
}
export const registerScreens = () => {
    Navigation.registerComponent("navigation.HomeScreen", () => ConnectedHomeScreen);
};
