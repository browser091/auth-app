import React from "react";

const LoginPage = (props) => {
  debugger
  return (
    <div>
      <div className="header">
        <p className="header_text">{"User Login"}</p>
      </div>
      {!props.isAuth && (
        <div className="container">
          <h2 className="heading">{"User Login"}</h2>

          <div className="form_wrapper">
            <input
              value={props.username}
              onChange={(event) => props.setUsername(event.target.value)}
              placeholder="Username"
              size="large"
              className="form_input"
            />
            <input
              value={props.password}
              onChange={(event) => props.setPassword(event.target.value)}
              placeholder="Password"
              size="large"
              type="password"
              className="form_input"
            />
          </div>
          <div className="form_buttons">
            <button
              onClick={props.doUserLogIn}
              type="primary"
              className="form_button"
              color={"#208AEC"}
              size="large"
              block
            >
              Log In
            </button>
          </div>
        </div>
      )}
      {props.isAuth && (
        <div className="container">
          // <h2 className="heading">{"User Screen"}</h2>
          <h2 className="heading">{`Hello ${props.userName}!`}</h2>
          <div className="form_buttons">
            <button
              onClick={() => props.doUserLogOut()}
              type="primary"
              className="form_button"
              color={"#208AEC"}
              size="large"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
