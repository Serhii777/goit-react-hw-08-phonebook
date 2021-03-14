import React from "react";
import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeWrapper}>
      <h2 className={styles.homeTitle}>Ласкаво просимо до нашого додадку!!!</h2>
      <div className={styles.homeDescriptionWrapper}>
        <h4 className={styles.titleDescription}>
          <span className={styles.titleDescriptionColor}>Phonebook</span> - це
          дуже крута приложуха (<span>😁</span>) !!!
        </h4>
        <p className={styles.homeText}>
          Цей зручний додаток робить ваше життя комфортним. Ви можете зберігати
          ваші контакти, перезаписувати їх, видаляти неактуальні.
        </p>

        <h4 className={styles.titleDescription}>
          Приємних вражень від корисування додатком{" "}
          <span className={styles.titleDescriptionColor}>Phonebook</span>!!!
        </h4>
      </div>

      <Link to="/register" className={styles.homeLink}>
        <button type="button" className={styles.homeButton}>
          Start using our app
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
