import React, {memo} from "react";
import {NavLink} from "react-router-dom";

import s from "./index.module.css";

const Link = ({to, name}) => {
    return <NavLink
        className={({isActive}) => (isActive ? `${s.active} ${s.link}` : `${s.link}`)}
        to={to}
    >
        {name}
    </NavLink>

};

export default memo(Link)
