import React, { SFC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { InnerProps as Props } from "./pyramid-game.container";

const PyramidGameScreen: SFC<Props> = ({ onPress }) => (
    <>
        <Text>PyramidGame</Text>
        <TouchableOpacity
            onPress={onPress}
        >
            <Text>Go Back</Text>
        </TouchableOpacity>
    </>
);

export default PyramidGameScreen;
