import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import ProfilePageContainer from "./componets/pages/ProfilePge/ProfilePageContainer";
import LoginPageContainer from "./componets/pages/LoginPage/LoginPageContainer";
import MainPageContainer from "./componets/pages/MainPge/MainPageContainer";
import InfoPageContainer from "./componets/pages/InfoPage/InfoPageContainer";
import React from "react";
import Navbar from "./componets/Navbar/Navbar";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<MainPageContainer/>}/>
                        <Route path='/login' element={<LoginPageContainer/>}/>
                        <Route path='/profile' element={<ProfilePageContainer/>}/>
                        <Route path='/info' element={<InfoPageContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
