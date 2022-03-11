import React, {memo} from "react";

import s from "./index.module.css";


const Profile = ({userName, logout}) => {
    if (userName) {
        return <div className={s.profile}><h3>Welcome: {userName} </h3>
            <button
                onClick={logout}
            >
                Log Out
            </button>
        </div>
    }
    return <div className={s.profile}><h4>Not logged in</h4></div>
};

export default memo(Profile)
