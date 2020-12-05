import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import avatarPath from "../../assets/artage-io-1789370_1606989336.png";
import { authSelectors, authOperations } from "../../redux/auth";

import styles from "./UserMenu.module.css";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={styles.userMenuWrapper}>
      <div className={styles.userImageWrapper}>
        <img
          src={avatarPath}
          alt="Your avatar"
          width="40"
          className={styles.userMenuAvatar}
        />
        <p className={styles.userMenuText}>
          Welcome, <span className={styles.userMenuName}>{name}</span>{" "}
        </p>
      </div>
      <button
        type="button"
        onClick={onLogout}
        className={styles.userMenuButton}>
        Logout
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  name: PropTypes.string,
  onLogout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
