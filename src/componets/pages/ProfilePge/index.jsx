import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom'

import {useMappedState} from "./bindings";


const ProfilePage = () => {
    const {isAuth, isLoginning} = useMappedState();
    let navigate = useNavigate()

    useEffect(() => {
        if (!isLoginning && !isAuth) {
            navigate('/login')
        }
    }, [isAuth, isLoginning])

    if (!isAuth) {
        return null
    }

    return <div>Profile Page</div>
}
export default ProfilePage
