import { Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import { registerScreens } from "./screens";

export const start = () => {
    registerScreens();

    Navigation.events().registerAppLaunchedListener(() => {

        Navigation.setRoot({
            root: {
                stack: {
                    children: [{
                        component: {
                            name: "navigation.HomeScreen"
                        },
                        id: "TEST",
                    }]
                }
            }
        });

    });
};
