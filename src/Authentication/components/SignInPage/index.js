import React, { Component } from 'react';
import {observer,inject} from 'mobx-react'
import {observable,action} from 'mobx'
import {PRODUCT_PATH} from '../../../Products/constants/RouteConstants';
import {SignPage,ErrorMsg,Input,Button,Title,TotalPage} from './styles'
@inject('authStores')
@observer class SignInPage extends Component {
    @observable username=''
    @observable password=''
    @observable errorMessage=''

    @action.bound
    onChangeUsername(event){
        this.username=event.target.value
    }
    @action.bound
    onChangePassword(event){
        this.password=event.target.value
    }
    @action.bound
      onSignInSuccess  ()  {
        const {history}=this.props;
           history.replace(PRODUCT_PATH);
      };
      @action.bound
      onSignInFailure () {
        const { getUserSignInAPIError: apiError } = this.props.authStores;
        if (apiError !== null && apiError !== undefined) {
          this.errorMessage = apiError;
        }
      };

    @action.bound
    onClickSignIn(event){
        if (this.username === "" || this.username === undefined) {
            this.errorMessage = "Please enter username";
          } 
          else if (this.password === "" || this.password === undefined) {
            this.errorMessage = "Please enter password";
          } 
          else {
              let object={
                username: this.username,
                password: this.password
              }

            this.props.authStores.userSignIn(object,this.onSignInSuccess,this.onSignInFailure)
            this.errorMessage = "";
          }
    }
    render() {
        return (
            <TotalPage>
        <SignPage>
            <Title>Sign In</Title>
            <Input type="text" placeholder="User name" onChange={this.onChangeUsername}></Input>
            <Input type="password" placeholder="Password" onChange={this.onChangePassword}></Input>
            <Button onClick={this.onClickSignIn}>Sign In</Button>
            <ErrorMsg>{this.errorMessage}</ErrorMsg>
        </SignPage>
        </TotalPage>
        );
    }
}

export default SignInPage;

