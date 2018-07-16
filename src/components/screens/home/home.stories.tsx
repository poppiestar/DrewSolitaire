import { storiesOf } from "@storybook/react-native";
import React, { SFC } from "react";
import { Text, View, ViewStyle } from "react-native";

const style = {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center"
} as ViewStyle;

const CenteredView: SFC<{}> = ({ children }) => (
    <View style={style}>
        {children}
    </View>
);

storiesOf("CenteredView", module)
    .add("default view", () => (
        <CenteredView>
            <Text>Hello Storybook</Text>
        </CenteredView>
    ));
