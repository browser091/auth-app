import React, {memo} from "react";

import s from "./index.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";


const Profile = ({userName, logout, icon}) => {
    if (userName) {
        return <div className={s.profile}>
            <h3 className={s.profileHeader}><FontAwesomeIcon icon={icon}/> {userName}</h3>
            <button
                onClick={logout}
            >
                Log Out
            </button>
        </div>
    }
    return <div className={s.profile}><h3 className={s.profileHeader}>Not logged in</h3></div>
};

export default memo(Profile)
