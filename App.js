import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import './styles/settings.css';
import './styles/pages/home.css';
import './styles/components/navbar.css';
import './styles/components/card.css';
import './styles/components/connectionForm.css';
import './styles/pages/profil.css';
import './styles/components/newPostForm.css';
import './styles/components/friendsHint.css';
import './styles/components/trends.css';
import './styles/components/leftNav.css';
import './styles/pages/trending.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; //yinstalli router 

import SignUp from "./components/Authentif/signup_component";
import Login from "./components/Authentif/login_component";
import Home from './components/Home';
import Profil from './components/Profil';
import Trending from './components/Trending';




function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <SignUp /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


