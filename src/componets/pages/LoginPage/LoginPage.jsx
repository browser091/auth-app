import React from "react";

const LoginPage = (props) => {

    return (
        <div>
            {!props.isAuth && (
                <div className="container">
                    <h2 className="heading">{"User Login"}</h2>

                    <div className="form_wrapper">
                        <input
                            value={props.username}
                            onChange={(event) => props.setUsername(event.target.value)}
                            placeholder="Username"
                        />
                        <input
                            value={props.password}
                            onChange={(event) => props.setPassword(event.target.value)}
                            placeholder="Password"
                            type='password'
                        />
                    </div>
                    {props.error&&<div style={{color: "red"}}>{props.error}</div>}
                    <div className="form_buttons">
                        <button
                            onClick={props.doUserLogIn}
                            type="primary"
                        >
                            Log In
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default LoginPage;
