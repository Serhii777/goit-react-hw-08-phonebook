import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.footerText}>
        <span className={styles.copyright}>&copy;</span>
        <p className={styles.year}>2020 </p>
        <p className={styles.text}>Phonebook</p>
      </div>
    </div>
  </footer>
);

export default Footer;
