import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "../pages/home/home";
import Login from '../pages/login/login'
import Feedback from '../pages/feedback/feedback'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Home} path="/home" exact />
      <Route component={Login} path="/" exact />
      <Route component={Feedback} path="/feedback" exact />
    </Switch>
  );
};

export default Routes;
