import React, { Component } from "react";
import { connect } from "react-redux";

import { authOperations } from "../../redux/auth";

import styles from "./LoginForm.module.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    this.props.onLogin({ ...this.state });

    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.loginWrapper}>
        <h2 className={styles.loginTitle}>Log in to your account</h2>

        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.loginLabel}>
            <span className={styles.loginText}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.loginInput}
            />
          </label>

          <label className={styles.loginLabel}>
            <span className={styles.loginText}>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.loginInput}
            />
          </label>

          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginForm);
