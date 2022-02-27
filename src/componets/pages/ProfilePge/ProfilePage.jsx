import React from "react";
import {useMappedState} from "../LoginPage/bindings";
import {Navigate} from 'react-router-dom'


const ProfilePage = (props) => {
    const {isAuth} = useMappedState();

    return isAuth ? (
        <div>Profile Page</div>
    ) : <Navigate to='/login'/>
}
export default ProfilePage
