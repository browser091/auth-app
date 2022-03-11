import React, {useEffect} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ProfilePge from "../pages/ProfilePge";
import LoginPage from "../pages/LoginPage";
import MainPge from "../pages/MainPge";
import InfoPage from "../pages/InfoPage";

import NavbarContainer from "../Navbar";

import {initParse} from "./services";
import {useMappedActions} from "./bindings";
import "./index.css";

initParse()

const  App = () => {
  const {initUser} = useMappedActions();

  useEffect(() => {
     initUser();
  },[])

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavbarContainer />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPge />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePge />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
