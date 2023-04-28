import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://www.logodesignlove.com/wp-content/uploads/2022/11/carebibi-logo-01-1200x1200.jpeg"
        alt="logo"
      />
        <div className={styles.loginBlock}>
            {props.isAuth ? props.login :<NavLink to={"/login"}>Login</NavLink>}

        </div>
    </header>
  );
};
export default Header;
