import React from "react";
import { Route } from "react-router-dom";
//import{Provider} from "mobx-react"
import {
  SIGN_IN_PATH
} from "../constants/RouteConstants";
import SignInPage from "../components/SignInPage";
//import stores from "../stores"

const AuthenticationRoutes = [
  //<Provider {...stores}>
  <Route key={SIGN_IN_PATH} path={SIGN_IN_PATH} component={SignInPage} />
  //</Provider>
];

export default AuthenticationRoutes;