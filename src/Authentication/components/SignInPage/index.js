import React, { Component } from 'react';
import {observer,inject} from 'mobx-react'
import {observable,action} from 'mobx'
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
    onClickSignIn(){
        if(this.username!=='' && this.password!==''){
          let response=this.props.authStores.userSignIn()
          if(response!==undefined){
             const {history}=this.props;
                    history.replace({
                      pathname:'/ProductPage'
                    });
          }
            this.errorMessage=''

        }
        else
        {
            this.errorMessage="Please enter username or password"
        }
    }
    render() {
        return (
        <div>
            <p>Sign In</p>
            <input type="text" placeholder="User name" onChange={this.onChangeUsername}/>
            <input type="password" placeholder="Password" onChange={this.onChangePassword} />
            <button onClick={this.onClickSignIn}>Sign In</button>
            <span>{this.errorMessage}</span>
        </div>
        );
    }
}

export default SignInPage;

