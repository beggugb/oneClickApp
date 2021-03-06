import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Provider } from "react-redux";
import { store, history } from "./helpers";

import "./assets/css/black-dashboard-react.css";

import AdminLayout from "./layouts/Admin/Admin.jsx";
import PostLayout from "./layouts/Post/Post.jsx";
import Error from "./layouts/Error.jsx";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) => <PostLayout {...props} />}
        />
        <Route
          exact
          path="/consultas"
          render={(props) => <PostLayout {...props} />}
        />
        <Route
          exact
          path="/registro"
          render={(props) => <PostLayout {...props} />}
        />
        <Route
          exact
          path="/verificar/:token"
          render={(props) => <PostLayout {...props} />}
        />
        <Route
          exact
          path="/"
          render={() => <Redirect to="/admin/dashboard" />}
        />
        <Route
          exact
          path="/admin"
          render={() => <Redirect to="/admin/dashboard" />}
        />
        <Route 
          exact 
          path="/restore/:token" 
          render={props => <PostLayout {...props} />} 
        />
                    
        <PrivateRoute path="/admin" component={AdminLayout} />
        <Route component={Error} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
