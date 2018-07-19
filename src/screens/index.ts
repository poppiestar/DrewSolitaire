import { Navigation } from "react-native-navigation";
import HomeScreen from "../components/screens/home/home.screen";

export const registerScreens = () => {
    Navigation.registerComponent("navigation.HomeScreen", () => HomeScreen);
};
