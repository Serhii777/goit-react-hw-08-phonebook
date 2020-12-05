import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../Routes/AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={styles.authNavList}>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Login
      </NavLink>
    </nav>
  );
};

export default AuthNav;
