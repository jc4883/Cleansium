import React from "react";
import { Provider } from "react-redux";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import DayIndexContainer from "./day/day_index_container";
import CreateDayFormContainer from "./day/create_day_container";
import UpdateDayFormContainer from "./day/update_day_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/days" component={DayIndexContainer} />
      <ProtectedRoute
        exact
        path="/days/:day_index/form"
        component={CreateDayFormContainer}
      />
      <ProtectedRoute
        exact
        path="/days/:dayId/form"
        component={UpdateDayFormContainer}
      />
    </Switch>
  </div>
);

export default App;
