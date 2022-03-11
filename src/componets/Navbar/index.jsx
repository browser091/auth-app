import React from "react";


import Profile from "./components/Profile";
import Link from "./components/Link";

import s from "./index.module.css";
import {useMappedState, useMappedActions} from "./bindings";

const menuLinks = [{to: '/', name: 'Main'}, {to: '/profile', name: 'Profile'}, {to: '/info', name: 'Info'}]


const Navbar = () => {
    const {userName} = useMappedState();
    const {logout} = useMappedActions();

    return (<>
            <nav className={s.nav}>
                <Profile userName={userName} logout={logout}/>
                {menuLinks.map(({to, name}) => <Link key={to} to={to} name={name}/>)}
            </nav>
        </>
    );
};

export default Navbar
