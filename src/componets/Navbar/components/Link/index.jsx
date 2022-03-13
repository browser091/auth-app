import React, {memo} from "react";
import {NavLink} from "react-router-dom";

import s from "./index.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Link = ({to, name, icon}) => {
    return <NavLink
        className={({isActive}) => (isActive ? `${s.active} ${s.link}` : `${s.link}`)}
        to={to}
    >
        <FontAwesomeIcon className={s.icon} icon={icon}/> {name}
    </NavLink>

};

export default memo(Link)
