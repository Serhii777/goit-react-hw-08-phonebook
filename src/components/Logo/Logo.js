import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/artage-io-1764551_1607095265.png";

import styles from "./Logo.module.css";

const Logo = () => (
  <Link to="/" className={styles.logoWrapper}>
    <div className={styles.logoContainer}>
      <img src={image} alt="" width="48" />
    </div>
  </Link>
);

export default Logo;
