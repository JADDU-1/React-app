import React from "react";
import './index.css';
import {withRouter} from "react-router-dom";
import {EachCountry,Flags,CountryAddress} from'./css.js'
class CountriesList extends React.Component{
  onClicked=()=>{
    const data=this.props.countryDetails;
    const countries=this.props.allCountries;
        const {history}=this.props;
        history.push({
          pathname:'./countryCard',
          state: {data,countries}
        });
    }
    
  render(){
      return(
          <EachCountry id={this.props.id}  onClick={this.onClicked}>
          <Flags  src={this.props.flag} alt='flag'></Flags>
          <CountryAddress>
          <p><b>{this.props.country}</b></p>
          <p><b>Population: </b>{this.props.population}</p>
          <p><b>Region: </b>{this.props.region}</p>
          <p><b>Capital: </b>{this.props.capital}</p>
          </CountryAddress>
          </EachCountry>
          );
     }
}

export default withRouter(CountriesList);

