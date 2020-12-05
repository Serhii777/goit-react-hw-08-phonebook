import React, { Component } from "react";
import { connect } from "react-redux";

import { authOperations } from "../../redux/auth";

import styles from "./RegisterForm.module.css";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    this.props.onRegister({ ...this.state });
    console.log(this.state);
    
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className={styles.registerWrapper}>
        <h2 className={styles.registerTitle}>
          Registration form for your account
        </h2>

        <form className={styles.registerForm} onSubmit={this.handleSubmit}>
          <label className={styles.registerLabel}>
            <span className={styles.registerText}>Name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={styles.registerInput}
            />
          </label>

          <label className={styles.registerLabel}>
            <span className={styles.registerText}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.registerInput}
            />
          </label>

          <label className={styles.registerLabel}>
            <span className={styles.registerText}>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.registerInput}
            />
          </label>

          <button type="submit" className={styles.registerButton}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
