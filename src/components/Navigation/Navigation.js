import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { authSelectors } from "../../redux/auth";

import styles from "./Navigation.module.css";

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav className={styles.navigationList}>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activelink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.string,
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});


export default connect(mapStateToProps)(Navigation);
