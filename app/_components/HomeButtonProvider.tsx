"use client";
import { Provider } from "react-redux";
import HomeButton from "../_ui/HomeButton";
import store from "../_lib/redux/store";

function HomeButtonProvider() {
    return (
        <div>
            <Provider store={store}>
                <HomeButton />
            </Provider>
        </div>
    );
}

export default HomeButtonProvider;
