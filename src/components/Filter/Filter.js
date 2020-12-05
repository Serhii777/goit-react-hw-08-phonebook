import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.filterContainer}>
    <h2 className={styles.filterTitle}>Find contacts</h2>

    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          type="text"
          className={styles.filterInput}
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

Filter.defaultProps = {
  filter: "",
};

export default Filter;
