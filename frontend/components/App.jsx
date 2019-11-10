import React from "react";
import { Provider } from "react-redux";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import DayIndexContainer from "./day/day_index_container";
import CreateDayFormContainer from "./create_day/create_day_container";
import UpdateDayFormContainer from "./update_day/update_day_container";
import NewDayPhotoCreateContainer from './create_day/new_day_photo_create_container';


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
        path="/days/:day_index/createForm"
        component={CreateDayFormContainer}
      />
      <ProtectedRoute
        exact
        path="/days/:dayId/updateForm"
        component={UpdateDayFormContainer}
      />
      <ProtectedRoute exact path="/new_day_photo/:day_index" component={NewDayPhotoCreateContainer}/>
    </Switch>
  </div>
);

export default App;
