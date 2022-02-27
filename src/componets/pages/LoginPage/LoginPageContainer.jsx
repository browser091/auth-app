import {useNavigate} from 'react-router-dom'
import React, {useState} from "react";
import Parse from "parse/dist/parse.min.js";

import LoginPage from "./LoginPage";

import {useMappedActions, useMappedState} from "./bindings";

const LoginPageContainer = (props) => {
    let navigate = useNavigate()
    // debugger
    const {isAuth, userName} = useMappedState();
    const {login, logout} = useMappedActions();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    const doUserLogIn = async function () {
        const isSuccess = await login({username, password});
        if (isSuccess) {
            setUsername("");
            setPassword("");
            setCurrentUser("");
            navigate('/');

        }
    };

    const doUserLogOut = async function () {
        const isSuccess = await logout();
    };

    const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        setCurrentUser(currentUser);
        return currentUser;
    };

    return (
        <LoginPage
            doUserLogOut={doUserLogOut}
            doUserLogIn={doUserLogIn}
            username={username}
            userName={userName}
            password={password}
            isAuth={isAuth}
            setUsername={setUsername}
            setPassword={setPassword}
        />
    );
};


export default LoginPageContainer;
