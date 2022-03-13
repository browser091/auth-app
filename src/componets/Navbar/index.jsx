import React from "react";

import Profile from "./components/Profile";
import Link from "./components/Link";
import {faUser, faHouse, faCircleInfo, faFaceLaughBeam, faTable} from '@fortawesome/free-solid-svg-icons'

import s from "./index.module.css";
import {useMappedState, useMappedActions} from "./bindings";

const menuLinks = [{to: '/', name: 'Main', icon: faHouse}, {
    to: '/profile',
    name: 'Profile',
    icon: faUser
}, {to: '/info', name: 'Info', icon: faCircleInfo}, {to:'/table', name: "Table", icon: faTable}]


const Navbar = () => {
    const {userName} = useMappedState();
    const {logout} = useMappedActions();

    return (<>
            <nav className={s.nav}>
                <Profile userName={userName} logout={logout} icon={faFaceLaughBeam}/>
                {menuLinks.map(({to, name, icon}) => <Link key={to} to={to} name={name} icon={icon}/>)}
            </nav>
        </>
    );
};

export default Navbar
