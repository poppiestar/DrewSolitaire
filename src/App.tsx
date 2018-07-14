import React, { SFC } from "react";
import { Provider } from "react-redux";
import { HomeScreen } from "./components/screens";
import configureStore from "./redux/store";

const store = configureStore();

const App: SFC<{}> = () => (
    <Provider store={store}>
        <HomeScreen />
    </Provider>
);

export default App;
