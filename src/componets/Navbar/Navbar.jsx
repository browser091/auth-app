import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {useMappedState} from "../pages/LoginPage/bindings";


const Navbar = () => {
    const {isAuth, userName} = useMappedState();

    return (<>
            <nav className={s.nav}>
                <hr/>
                {isAuth ? <h3>Welcome: {userName} </h3> : <h4>Not logged in</h4>}
                <hr/>
                <div>
                    <NavLink
                        className={({isActive}) => (isActive ? `${s.active}` : "")}
                        to="/"
                    >
                        Main
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={({isActive}) => (isActive ? `${s.active}` : "")}
                        to="/profile"
                    >
                        Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={({isActive}) => (isActive ? `${s.active}` : "")}
                        to="/info"
                    >
                        Info
                    </NavLink>
                </div>

            </nav>
        </>
    );
};

export default Navbar
