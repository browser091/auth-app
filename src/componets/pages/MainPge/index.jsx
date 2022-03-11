import React from "react";

import {useMappedState} from "../LoginPage/bindings";

const MainPage = () => {
    const {userName} = useMappedState();


    return <div>
        {!!userName && <div><h1>Welcome, {userName}!</h1></div>}
        <div className="container">
            Main Page
        </div>
    </div>


}
export default MainPage
