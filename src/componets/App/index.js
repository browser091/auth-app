import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import ProfilePageContainer from "../pages/ProfilePge/ProfilePageContainer";
import LoginPageContainer from "../pages/LoginPage/LoginPageContainer";
import MainPageContainer from "../pages/MainPge/MainPageContainer";
import InfoPageContainer from "../pages/InfoPage/InfoPageContainer";
import React from "react";
import Navbar from "../Navbar/Navbar";

import Parse from "parse/dist/parse.min.js";

const PARSE_APPLICATION_ID = "MPYNUsWo2DPhxCkJlhTjjmPXTvyRMFrXYj0HsRMA";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "NDkUxaRlJf0kRhUIYiev4ZUhCfZD161ucEE7bwHE";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPageContainer />} />
            <Route path="/login" element={<LoginPageContainer />} />
            <Route path="/profile" element={<ProfilePageContainer />} />
            <Route path="/info" element={<InfoPageContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
