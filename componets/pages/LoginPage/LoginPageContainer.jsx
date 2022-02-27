import { connect } from "react-redux";
import { compose } from "redux";
import React, { useState } from "react";
import Parse from "parse/dist/parse.min.js";

import { useDispatch } from "react-redux";

import LoginPage from "./LoginPage";
import { logInActionCreator } from "../../state/authReducer";
import { userActions } from "../../../app/actions";

import { useMappedActions, useMappedState } from "./bindings";

const LoginPageContainer = (props) => {
  debugger
  const { isAuth, userName, error } = useMappedState();
  const { login, logout } = useMappedActions();
  console.log(error)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const doUserLogIn = async function () {
    const isSuccess = await login({ username, password });
    if (isSuccess) {
      setUsername("");
      setPassword("");
      setCurrentUser("");
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
      error={error}
    />
  );
};

// const mapStateToProps = (state) => {
//   return {
//     state: state.authUser,
//     // username: username
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     logIn: (id, password, username) =>
//       dispatch(logInActionCreator(id, password, username)),
//   };
// };
// export default compose(
//     connect(mapStateToProps, mapDispatchToProps)
// )(LoginPage);

export default LoginPageContainer;
