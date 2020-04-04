import React from "react";
import './index.css';
import { FaRegMoon } from 'react-icons/fa';
import {HeaderStyles,ThemeButton} from'./css.js';
class CountriesHeader extends React.Component{
    render(){
        return(
            <HeaderStyles>
            <h3>Where in the world?</h3>
            <ThemeButton onClick={this.props.change}><FaRegMoon />  {this.props.theme.text}</ThemeButton>
            </HeaderStyles>
            );
    }
}
export{CountriesHeader};