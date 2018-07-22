import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import HomeScreen from "./home.screen";

interface IOuterProps {
    componentId: string;
}

export interface InnerProps {
    onButtonPress: () => void;
}

type Props = InnerProps & IOuterProps;

class HomeContainer extends Component<Props> {

    public render() {
        return (
            <HomeScreen
                onButtonPress={this.onButtonPress}
            />
        );
    }

    private onButtonPress = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "navigation.game.PyramidScreen"
            }
        });
    }
}

export default HomeContainer;
