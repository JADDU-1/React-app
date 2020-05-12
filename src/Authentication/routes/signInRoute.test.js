import React from "react";
import { render, fireEvent, waitFor} from "@testing-library/react";
import { Router,Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import {SIGN_IN_PATH} from "../constants/RouteConstants";
import {PRODUCT_PATH} from '../../Products/constants/RouteConstants';
import AuthService from "../services/AuthService";
import AuthStore from "../stores/AuthStore/index";
import getUserSignInResponse from "../fixtures/getUserSignInResponse/index.json";
import SignInRoute from "./signInRoute";

const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
  ));
  
  describe("SignInRoute Tests", () => {
    let authAPI;
    let authStore;
  
    beforeEach(() => {
      authAPI = new AuthService();
      authStore = new AuthStore(authAPI);
    });
  
    afterEach(() => {
      jest.resetAllMocks();
    });
  
    it("should render username empty error message", () => {
      const { getByText, getByRole } = render(
        <Router history={createMemoryHistory()}>
          <SignInRoute authStores={authStore} />
        </Router>
      );
      const signInButton = getByRole("button", { name: "Sign In" });
  
      fireEvent.click(signInButton);
  
      getByText(/Please enter username/i);
    });
  
    it("should render password empty error message", () => {
      const { getByText, getByPlaceholderText, getByRole } = render(
        <Router history={createMemoryHistory()}>
          <SignInRoute authStores={authStore} />
        </Router>
      );
      const username = "test-user";
      const usernameField = getByPlaceholderText("Username");
      const signInButton = getByRole("button", { name: "Sign In" });
  
      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.click(signInButton);
  
      getByText(/Please enter password/i);
    });
  
    it("should submit sign-in on press enter", () => {
      const { getByPlaceholderText, getByRole } = render(
        <Router history={createMemoryHistory()}>
          <SignInRoute authStores={authStore} />
        </Router>
      );
      const username = "test-user";
      const password = "test-password";
  
      const usernameField = getByPlaceholderText("Username");
      const passwordField = getByPlaceholderText("Password");
      const signInButton = getByRole("button", { name: "Sign In" });
  
      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInButton);
    })

    it("should render signInRoute loading state", async () => {
      const { getByPlaceholderText, getByRole } = render(
        <Router history={createMemoryHistory()}>
          <SignInRoute authStores={authStore} />
        </Router>
      );
      const username = "test-user";
      const password = "test-password";
  
      const usernameField = getByPlaceholderText("Username");
      const passwordField = getByPlaceholderText("Password");
      const signInButton = getByRole("button", { name: "Sign In" });
  
      const mockLoadingPromise = new Promise(function(resolve, reject) {});
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI = mockSignInAPI;
  
      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInButton);
    });

    it("should render signInRoute success state", async () => {
      const history = createMemoryHistory();
      const route = SIGN_IN_PATH;
      history.push(route);
  
      const {
        getByPlaceholderText,
        getByRole,
        queryByRole,
        queryByLabelText,
        getByTestId,debug
      } = render(
        <Provider authStores={authStore}>
          <Router history={history}>
            <Route path={SIGN_IN_PATH}>
              <SignInRoute />
            </Route>
            <Route path={PRODUCT_PATH}>
              <LocationDisplay />
            </Route>
          </Router>
        </Provider>
      );
  
      const username = "test-user";
      const password = "test-password";
  
      const usernameField = getByPlaceholderText("Username");
      const passwordField = getByPlaceholderText("Password");
      const signInButton = getByRole("button", { name: "Sign In" });
  
      const mockSuccessPromise =new Promise(function(resolve, reject) {
        resolve(getUserSignInResponse);
      });
      //const mockSuccessPromise =Promise.resolve(getUserSignInResponse);
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockSuccessPromise);
      authAPI.signInAPI = mockSignInAPI;
      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInButton);
      // await waitFor(()=>{
      //   console.log("success",authStore.getUserSignInAPIStatus)
      // })
      
  
      // await waitFor(() => {
      //   //debug()
      //   expect(
      //     queryByRole("button", { name: "Sign In" })
      //   ).not.toBeInTheDocument();
      //   expect(getByTestId("location-display")).toHaveTextContent(
      //     PRODUCT_PATH
      //   );
      // });
    });

    it("should render signInRoute failure state", async() => {
      const { getByText, getByPlaceholderText, getByRole } = render(
        <Router history={createMemoryHistory()}>
          <SignInRoute authStores={authStore} />
        </Router>
      );
  
      const username = "test-user";
      const password = "test-password";
  
      const usernameField = getByPlaceholderText("Username");
      const passwordField = getByPlaceholderText("Password");
      const signInButton = getByRole("button", { name: "Sign In" });
  
      const mockFailurePromise = new Promise(function(resolve, reject) {
        reject(new Error("error"));
      })//.catch(() => {});
      const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockFailurePromise);
      authAPI.signInAPI = mockSignInAPI;
  
      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(signInButton);
  
      await waitFor(() => {
        getByText(/error/i);
     });
    });
  });

// })