import React, { Component } from 'react';
import {
    Redirect,Route
  } from "react-router-dom";

  import {ACCESS_TOKEN,getCookie, getAccessToken} from '../../utils/StorageUtils'
  
  
  class ProtectedRoute extends Component {
    //   goToLoginPage=()=><Redirect to={{pathname:'/signin'}}/>
    //   goToProductPage=()=><Redirect to={{pathname:'/productpage'}}/>
      render(){
          const {component:Component, ...others} = this.props;
        return (getAccessToken())?<Route component={Component} {...others}/>:<Redirect to={{pathname:'/signin'}}/>
    }
}

export default ProtectedRoute;
