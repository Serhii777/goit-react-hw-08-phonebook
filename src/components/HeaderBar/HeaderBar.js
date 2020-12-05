import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";


import Logo from "../Logo";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../Routes/AuthNav";

import { authSelectors } from "../../redux/auth";

import styles from "./HeaderBar.module.css";

const HeaderBar = ({ isAuthenticated }) => (
  <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <div className={styles.menuWrapper}>
        <Logo />
        <Navigation />
      </div>

      <div
        className={
          isAuthenticated ? styles.containerUser : styles.containerIsAuth
        }>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  </header>
);

HeaderBar.propTypes = {
  isAuthenticated: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(HeaderBar);
