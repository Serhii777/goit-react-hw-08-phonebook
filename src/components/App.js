import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "./Spinner";
import Layout from "./Layout";
import routes from "../routes";

import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              )
            )}
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onResetNewContactUnique: PropTypes.func,
};

App.defaultProps = {
  contacts: [{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" }],
  newContactUnique: false,
};

export default App;
