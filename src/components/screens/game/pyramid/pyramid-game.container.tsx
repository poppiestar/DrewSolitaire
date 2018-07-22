import React, { Component } from "react";
import { Text } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { Deck } from "../../../../lib";
import { newGamePyramid } from "../../../../redux/game/pyramid/pyramid.actions";
import { IAppStore } from "../../../../redux/reducers";
import { getGameDeck, getRemainderDeck } from "../../../../redux/selectors";
import PyramidGameScreen from "./pyramid-game.screen";

interface IConnectedState {
    gameDeck: Deck;
    remainderDeck: Deck;
}

interface IConnectedDispatch {
    newGamePyramid: () => void;
}

interface IOuterProps {
    componentId: string;
}

export type InnerProps = IConnectedState & {
    onPress: () => void;
};

type Props = InnerProps & IOuterProps & IConnectedDispatch;

interface IState {
    loading: boolean;
}

class PyramidGameContainer extends Component<Props, IState> {

    public state: IState = {
        loading: true
    };

    public componentDidMount() {
        this.props.newGamePyramid();
    }

    public componentDidUpdate() {
        this.setState({ loading: false });
    }

    public render() {
        const { gameDeck, remainderDeck } = this.props;
        const { loading } = this.state;

        if (loading) {
            return <Text>LOADING</Text>;
        }

        return (
            <PyramidGameScreen
                gameDeck={gameDeck}
                onPress={this.onPress}
                remainderDeck={remainderDeck}
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

const mapStateToProps = (state: IAppStore) => ({
    gameDeck: getGameDeck(state),
    remainderDeck: getRemainderDeck(state)
});

const mapDispatchToProps = {
    newGamePyramid,
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(PyramidGameContainer);
