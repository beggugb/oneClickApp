import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Provider } from "react-redux";
import { store, history } from "./helpers";
import ReduxToastr from 'react-redux-toastr'
import "./assets/css/black-dashboard-react.css";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import AdminLayout from "./layouts/Admin/Admin.jsx";
import PostLayout from "./layouts/Post/Post.jsx";
import Error from "./layouts/Error.jsx";

function App() {
return(
  <Provider store={store}>
    <ReduxToastr
        timeOut={1100}
        newestOnTop={false}
        preventDuplicates
        progressBar={true}
        position="top-center"
        getState={(state) => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick/> 
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
    </Provider>
  );
}

export default App;
