import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink
                    className={({ isActive }) => (isActive ? `${s.active}` : "")}
                    to="/"
                >
                    Main
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={({ isActive }) => (isActive ? `${s.active}` : "")}
                    to="/profile"
                >
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={({ isActive }) => (isActive ? `${s.active}` : "")}
                    to="/info"
                >
                    Info
                </NavLink>
            </div>

        </nav>
    );
};

export default Navbar
