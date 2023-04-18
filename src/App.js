import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {  Routes, Route } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile  />}
            ></Route>
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer

                />
              }
            ></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/music" element={<Music />}></Route>
              <Route path="/users" element={
                  <UsersContainer />} ></Route>

          </Routes>
        </div>
      </div>
  );
};

export default App;
