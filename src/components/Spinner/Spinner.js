import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <Loader type="Oval" color="#025b51" height={80} width={80} />
    </div>
  );
};

export default Spinner;
