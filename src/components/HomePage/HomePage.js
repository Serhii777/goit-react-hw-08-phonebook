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
          сама крута приложуха на світі!!!
        </h4>
        <p className={styles.homeText}>
          Вона робить ваше життя щасливим, ви lorem ipsum dolor sit amet
          consectetur adipisicing elit. Atque commodi dolores, repellendus quis
          hic tempore impedit cumque neque consequuntur. Ullam, eligendi alias
          reprehenderit autem deserunt ipsam magni beatae unde totam temporibus
          assumenda vero quis suscipit nostrum harum delectus molestiae adipisci
          ad consequatur enim nulla quos velit veniam expedita? Impedit modi
          commodi repudiandae voluptates odit soluta architecto voluptatem,
          quibusdam debitis perspiciatis ab nesciunt quae reiciendis aut sunt et
          eum recusandae libero nostrum qui consequuntur similique aliquid!
        </p>

        <h4 className={styles.titleDescription}>
          Приємних вражень від корисування нашим додатком{" "}
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
