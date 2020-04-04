import React from "react";
import './index.css';
import Navbar from './nav.js';
import {CountriesHeader}from './header.js';
import {withRouter} from "react-router-dom";
import {Flag,FlagTag,CardDetails,Details,CityButton,CityDetails,CountryCardBox,Borders,CountryName,TopLevel} from'./css.js';

class CountryCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allCountries:this.props.location.state.countries,
            country:this.props.location.state.data,
        };
    }
    buttonClick=(event)=>{
        const map=this.state.allCountries.filter(item=>{return (event.target.value===item.alpha3Code)});
        this.setState({country:map[0]});
    }
    borders=()=>{
      const data=this.state.country.borders.map((item,index)=>
          <CityButton key={index} id={index} onClick={this.buttonClick} value={item}>{item}</CityButton>);
      return <div>{data}</div>;
    }
    currencies=()=>{
        const currency=this.state.country.currencies.map((item,index)=>
        <span key={index} id={index}>{item.name} </span>);
        return currency;
    }
    languages=()=>{
        const language=this.state.country.languages.map((item,index)=>
        <span key={index} id={index}>{item.name}</span>);
        return language;
    }
    render(){
        return(
        //<div className='totalCard'>
        <CountryCardBox theme={this.props.themeObject}>
          <CountriesHeader change={this.props.change} theme={this.props.themeObject}/>
            <Navbar />
          <CardDetails>
            <FlagTag>
              <Flag src={this.state.country.flag}></Flag>
            </FlagTag>
            <CityDetails>
            <Details>
            <CountryName><b>{this.state.country.name}</b></CountryName>
              <p><b>Native Name: </b>{this.state.country.nativeName}</p>
              <p><b>Population: </b>{this.state.country.population}</p>
              <p><b>Region: </b>{this.state.country.region}</p>
              <p><b>Sub Region: </b>{this.state.country.subregion}</p>
              <p><b>Capital: </b>{this.state.country.capital}</p>
              </Details>
            <TopLevel>
              <p><b>Top Level Domain: </b>{this.state.country.topLevelDomain}</p>
              <p><b>Currencies: </b>{this.currencies()}</p>
              <p><b>Languages: </b>{this.languages()}</p>
            </TopLevel>
            <Borders>
              <p><b>Border Cities: </b>{this.borders()}</p>
            </Borders>
            </CityDetails>
          </CardDetails>
        </CountryCardBox>
      );
    }
}
export default withRouter(CountryCard);


