import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/login/login.jsx";
import Registro from "../../pages/registro/registro.jsx";
import Verificar from "../../pages/registro/verificar.jsx"


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
    };
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Switch>
            <Route path="/login/" component={Login} />
            <Route path="/registro" component={Registro} />
            <Route path="/verificar/:token" component={Verificar} />
          </Switch>
        </div>
      </>
    );
  }
}

export default Post;
