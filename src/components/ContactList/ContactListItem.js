import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactList.module.css";

const ContactListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.contactDetails}>
        <p className={styles.contactName}>{name}:</p>
        <span className={styles.contactNumber}>{number}</span>
      </div>
      <button
        type="button"
        className={styles.contactButton}
        onClick={onRemoveContact}>
        &#10006;
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func,
};

ContactListItem.defaultProps = {
  name: "",
  number: "",
};

export default ContactListItem;
