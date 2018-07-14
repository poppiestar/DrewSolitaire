import React, { Component } from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../../redux/game/game.actions";
import { IAppStore } from "../../../redux/reducers";
import { getVisibilityFilter } from "../../../redux/selectors";

import HomeScreen from "./home.screen";

interface IConnectedState {
    visibilityFilter: string;
}

interface IConnectedDispatch {
    setVisibilityFilter: (filter: string) => void;
}

export type InnerProps = IConnectedState & IConnectedDispatch;

type Props = InnerProps;

class HomeContainer extends Component<Props> {

    public render() {
        return (
            <HomeScreen
                visibilityFilter={this.props.visibilityFilter}
                setVisibilityFilter={this.props.setVisibilityFilter}
            />
        );
    }
}

const mapStateToProps = (state: IAppStore) => ({
    visibilityFilter: getVisibilityFilter(state)
});

const mapDispatchToProps = {
    setVisibilityFilter
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
