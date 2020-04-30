import React from "react";
import { Route } from "react-router-dom";
import {
  SIGN_IN_PATH
} from "../constants/RouteConstants";
import SignInPage from "../components/SignInPage";

const AuthenticationRoutes = [
  <Route key={SIGN_IN_PATH} path={SIGN_IN_PATH} component={SignInPage} />
];

export default AuthenticationRoutes;