import React, { SFC } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { InnerProps as Props } from "./home.container";

const instructions = Platform.select({
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu",
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
});

const HomeScreen: SFC<Props> = ({ onButtonPress }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity
            onPress={onButtonPress}>
            <Text>Start Pyramid Game</Text>
        </TouchableOpacity>
    </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        flex: 1,
        justifyContent: "center",
    },
    instructions: {
        color: "#333333",
        marginBottom: 5,
        textAlign: "center",
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
    },
});
