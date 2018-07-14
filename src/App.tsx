import React, { SFC } from "react";
import { Provider } from "react-redux";
import { HomeScreen } from "./components/screens";
import store from "./redux/store";

const App: SFC<{}> = () => (
    <Provider store={store()}>
        <HomeScreen />
    </Provider>
);

export default App;
