import React from "react";
import CountriesList from './countrieslist.js';
import {CountriesHeader}from './header.js';
import {CountriesSearch} from './search.js';
import {CountriesFilter} from './filter.js';
import {SearchAndFilter,SelectTag,Country,SearchClass,CountryPage,Loading} from'./css.js';
/*global fetch*/

class CountriesDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchText:'',
            countriesData:[],
            selectedRegionCountries:[],
            filterOptions:['All'],
            copyFilter:[],
            
        };
    }
    componentDidMount() {
       fetch('https://restcountries.eu/rest/v2/all')
       .then(response => response.json())
       .then(data => this.setState({countriesData:data,selectedRegionCountries:data,copyFilter:data}));
    }   
     searchText=(event)=> {
    this.setState({searchText: event.target.value});
    }

    filterCountriesBySearchText=(event)=>{
        event.preventDefault();
        const search=this.state.searchText.toLowerCase();
        const searchedResult=this.state.selectedRegionCountries.filter(item=>{
           return item.name.toLowerCase().includes(search);
        });
        this.setState({copyFilter:searchedResult});
    }
    
    filterCountriesBySelectedRegion=(event)=>{
        if(event.target.value!=='All'){
           const selected=event.target.value;
           const filtered=this.state.countriesData.filter(item=>item.region===selected);
           this.setState({selectedRegionCountries:filtered,copyFilter:filtered});
        }
        else {
            this.setState({selectedRegionCountries:this.state.countriesData,copyFilter:this.state.countriesData});
        }
    }
    
    createRegions=()=>{
        const array=this.state.filterOptions.slice(0);
        this.state.countriesData.filter(item =>{return array.push(item.region);});
        
        const uniqueNames = array.filter((val, id, array) => {return array.indexOf(val) === id;});
       return this.state.filterOptions=uniqueNames;

    }
    
    getRegionOptions=()=>{
        const mappedData= this.state.filterOptions.map((item,index) =>
            <CountriesFilter key={index} id={index} name={item} />);
        return mappedData;
    }
    
    
    displayTheCountries=()=>{
      const mappedData= this.state.copyFilter.map((item,index) =>
            <CountriesList key={index} id={index} allCountries={this.state.countriesData} countryDetails={item} flag={item.flag} country={item.name} population={item.population} region={item.region} capital={item.capital}/>);
      return mappedData; 
        
    }
  render(){
      let message='';
      if(this.state.countriesData.length===0)
          message=<Loading>Loading...</Loading>;
      else if(this.state.copyFilter.length===0)
          message=<Loading>Result Not Found!</Loading>;
          
      return(
          <CountryPage theme={this.props.themeObject}>
          <CountriesHeader change={this.props.change} theme={this.props.themeObject} />
          <SearchAndFilter >
          <SearchClass >
            <form onSubmit={this.filterCountriesBySearchText}>
             {<CountriesSearch search={this.searchText}  change={this.props.change} theme={this.props.themeObject}/>}
            </form>
            </SearchClass>
            <SelectTag onChange={this.filterCountriesBySelectedRegion}>
           {this.createRegions()}
           {this.getRegionOptions()}
           </SelectTag>
          </SearchAndFilter>
          <Country>
             {(this.state.copyFilter.length===0||this.state.countriesData.length===0)?  message:this.displayTheCountries()}
          </Country>
          </CountryPage>
          );
     }
}

export{CountriesDashboard};
