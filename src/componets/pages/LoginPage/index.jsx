import {useNavigate} from 'react-router-dom'
import React, {useState} from "react";

import {useMappedActions, useMappedState} from "./bindings";


const initialValues = {
    username: '',
    password: '',
}

const LoginPageContainer = () => {
    let navigate = useNavigate()
    const {isAuth} = useMappedState();
    const {login} = useMappedActions();

    const [error, setError] = useState('');
    const [data, setData] = useState(initialValues);

    const doUserLogIn = async function (e) {
        e.preventDefault()
        const error = await login(data);
        if (!error) {
            navigate('/profile');
        } else {
            setError(error)
        }
    };

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    if (isAuth) {
        return null
    }

    return (
        <form onSubmit={doUserLogIn}>
            <div className="container">
                <h2 className="heading">User Login</h2>
                <div className="form_wrapper">
                    <input
                        name='username'
                        value={data.username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                    <input
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                        placeholder="Password"
                        type='password'
                        autoComplete='off'
                    />
                </div>
                {error && <div style={{color: "red"}}>{error}</div>}
                <div className="form_buttons">
                    <button
                        type="submit"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </form>
    );
};


export default LoginPageContainer;
