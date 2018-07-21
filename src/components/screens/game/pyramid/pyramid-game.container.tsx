import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import PyramidGameScreen from "./pyramid-game.screen";

interface IOuterProps {
    componentId: string;
}

export interface InnerProps {
    onPress: () => void;
}

type Props = InnerProps & IOuterProps;

class HomeContainer extends Component<Props> {

    public render() {
        return (
            <PyramidGameScreen
                onPress={this.onPress}
            />
        );
    }

    private onPress = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "navigation.HomeScreen"
            }
        });
    }
}

export default HomeContainer;
