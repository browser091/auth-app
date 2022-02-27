import React from "react";
import {useMappedActions, useMappedState} from "../LoginPage/bindings";
import {Navigate} from 'react-router-dom'

const MainPage = (props) => {
    const {isAuth, userName} = useMappedState();
    const {logout} = useMappedActions();

    return isAuth ? (<div>
            <div><h1>Welcome, {userName}!</h1></div>
            <div className="container">
                <div className="form_buttons">
                    <button
                        onClick={logout}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>

    ) : <Navigate to='/login'/>

}
export default MainPage
