import { shallow } from "enzyme";
import React from "react";
import "react-native";
import HomeScreen from "../home.screen";

describe("HomeScreen", () => {

    it("should render", () => {

        const actual = shallow(
            <HomeScreen
                setVisibilityFilter={jest.fn()}
                visibilityFilter="maybe"
            />
        );
        expect(actual).toMatchSnapshot();
    });
});
