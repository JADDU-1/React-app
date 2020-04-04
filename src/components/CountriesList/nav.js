import React from "react";
import './index.css';
import {withRouter} from "react-router-dom";
import {BackButton} from'./css.js';
import { MdKeyboardBackspace } from 'react-icons/md';

class Navbar extends React.Component{
    navigate=()=>{
        const {history}=this.props;
        history.goBack();
    }
    render(){
        return(
            <BackButton  onClick={this.navigate}>{<MdKeyboardBackspace/>}&nbsp;&nbsp;Back</BackButton>
            );
    }
}
export default withRouter(Navbar);
