import React, { Component } from "react";
import { connect } from "react-redux";
import { IAppStore } from "../../../redux/reducers";
import { getVisibilityFilter } from "../../../redux/selectors";
import HomeScreen from "./home.screen";

interface IConnectedState {
    visibilityFilter: string;
}

export type InnerProps = IConnectedState;

type Props = InnerProps;

class HomeContainer extends Component<Props> {

    public render() {
        return <HomeScreen visibilityFilter={this.props.visibilityFilter} />;
    }
}

const mapStateToProps = (state: IAppStore) => ({
    visibilityFilter: getVisibilityFilter(state)
});

export default connect<IConnectedState>(
    mapStateToProps
)(HomeContainer);
