import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../../redux/game/game.actions";
import { IAppStore } from "../../../redux/reducers";
import { getVisibilityFilter } from "../../../redux/selectors";
import HomeScreen from "./home.screen";

// interface IConnectedState {
//     visibilityFilter: string;
// }

// interface IConnectedDispatch {
//     setVisibilityFilter: (filter: string) => void;
// }

interface IOuterProps {
    componentId: string;
}

// export type InnerProps = IConnectedState & IConnectedDispatch & { onButtonPress: () => void };
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

// const mapStateToProps = (state: IAppStore) => ({
//     visibilityFilter: getVisibilityFilter(state)
// });

// const mapDispatchToProps = {
//     setVisibilityFilter
// };

export default HomeContainer;
