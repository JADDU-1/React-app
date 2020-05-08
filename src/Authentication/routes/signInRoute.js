import React from "react";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import {PRODUCT_PATH} from '../../Products/constants/RouteConstants';
import SignInPage from "../components/SignInPage/index";


@inject("authStores")
@observer
class SignInRoute extends React.Component {
  @observable username = "";
  @observable password = "";
  @observable errorMessage = "";

  @action.bound
  onChangeUsername(e) {
    this.username = e.target.value;
  }

  @action.bound
  onChangePassword(e) {
    this.password = e.target.value;
  }

  onSignInSuccess = () => {
    const { history } = this.props;
    this.props.history.replace(PRODUCT_PATH);
  };

  @action.bound
      onSignInFailure () {
        const { getUserSignInAPIError: apiError } = this.props.authStores;
        if (apiError !== null && apiError !== undefined) {
          this.errorMessage = apiError;
        }
      };

  onSubmitForm = e => {
    const { userSignIn } = this.props.authStores;
    e.preventDefault();
    if (this.username === "" || this.username === undefined) {
      this.errorMessage = "Please enter username";
      return;
    } else if (this.password === "" || this.password === undefined) {
      this.errorMessage = "Please enter password";
      return;
    } else {
      this.errorMessage = "";
      userSignIn(
        {
          username: this.username,
          password: this.password
        },
        this.onSignInSuccess,
        this.onSignInFailure
      );
    }
  };

  render() {
    return (
      <SignInPage
        errorMessage={this.errorMessage}
        username={this.username}
        password={this.password}
        onChangeUsername={this.onChangeUsername}
        onChangePassword={this.onChangePassword}
        onSubmitForm={this.onSubmitForm}
      />
    )
  }
}
export default SignInRoute;