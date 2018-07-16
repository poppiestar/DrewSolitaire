import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import HomeScreen from "./home.screen";

storiesOf("HomeScreen", module)
    .addDecorator(withKnobs)
    .add("default view", () => (
        <HomeScreen
            setVisibilityFilter={action("set-visibility-filter clicked")}
            visibilityFilter={text("Visibility Filter text", "fred")}
        />
    ));
