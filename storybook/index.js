import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import { loadStories } from "./storyLoader";
import './addons';

// import your stories
configure(function() {
  loadStories()
}, module);

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
});

AppRegistry.registerComponent("DrewSolitaire", () => StorybookUI);
