import React from "react";
import './index.css';

class CountriesFilter extends React.Component{
    
    render(){
        return(
             <option id={this.props.id}>{this.props.name}</option>
            )
    }
}
export{CountriesFilter}