import React from "react";
import HeaderBar from "../HeaderBar";
import Main from "../Main";
import Footer from "../Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutWrapper}>
      <HeaderBar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
export default Layout;
