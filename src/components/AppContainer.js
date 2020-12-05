import React, { Component } from "react";
import { connect } from "react-redux";

import App from "./App";
import { authOperations } from "../redux/auth";

class AppContainer extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(AppContainer);
