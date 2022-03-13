import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom'

import {useMappedState} from "./bindings";


const ProfilePage = () => {

    const {isAuth, isLoginning, userName} = useMappedState();
    let navigate = useNavigate()

    useEffect(() => {
        if (!isLoginning && !isAuth) {
            navigate('/login')
        }
    }, [isAuth, isLoginning])

    if (!isAuth) {
        return null
    }

    return <div><h2 className='heading'>Profile Page</h2>
         <div><h1>Welcome, {userName}!</h1></div>
    </div>
}
export default ProfilePage
