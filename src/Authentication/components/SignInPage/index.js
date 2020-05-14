import React, { Component } from 'react';
import {SignPage,ErrorMsg,Input,Button,Title,TotalPage} from './styles'
import { observer } from "mobx-react";

@observer 
class SignInPage extends Component {
   
    userNameRef=React.createRef()
    passwordRef=React.createRef()
      render() {
      const {username,onChangeUsername,password,onChangePassword,onSubmitForm,errorMessage} = this.props;
        return (
            <TotalPage>
                <SignPage>
                    <Title>Sign In</Title>
                    <Input type="text" ref={this.userNameRef} placeholder="Username" onChange={onChangeUsername} value={username}></Input>
                    <Input type="password" ref={this.passwordRef} placeholder="Password" onChange={onChangePassword} value={password}></Input>
                    <Button onClick={onSubmitForm} >Sign In</Button>
                    <ErrorMsg>{errorMessage}</ErrorMsg>
                </SignPage>
            </TotalPage>
        );
    }
}

export default SignInPage;

