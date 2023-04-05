import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {  Routes, Route } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Users from "./components/Users/Users";


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}
            ></Route>
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                    dialogsPage={props.state.dialogsPage}
                />
              }
            ></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/music" element={<Music />}></Route>
              <Route path="/users" element={
                  <Users usersPage={props.state.usersPage}
                  />} ></Route>

          </Routes>
        </div>
      </div>
  );
};

export default App;
