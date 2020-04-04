import React from "react";
import './index.css';
import {SearchTag} from'./css.js'

class CountriesSearch extends React.Component{
    render(){
        return(
            <SearchTag  theme={this.props.theme} type='text' onChange={this.props.search}  placeholder='Search for a country'></SearchTag>
            )
    }
}
export{CountriesSearch}