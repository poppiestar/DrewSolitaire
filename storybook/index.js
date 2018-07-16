import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import './addons';

// import your stories
configure(function() {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({
  port: 7007,
  host: 'localhost',
});

AppRegistry.registerComponent("DrewSolitaire", () => StorybookUI);
