import React from 'react';
import {CitiesList} from "./visitedCities.js";
class Visited extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cityOptions:this.props.cities,
      visitedCities:[],
      selectedCities:[],
      check:false
    };
  }
  renderCityOptions=()=>{
   const map= this.state.cityOptions.map((item,index)=>
         <CitiesList key={index} id={index} value={item} check={this.state.check} clicked={this.handleUserInput}/>);
        return map;
  }
  handleUserInput=(event)=>{
    const copySelectedCities=this.state.selectedCities.splice(0);
    if(event.target.checked){
     copySelectedCities.push(event.target.value);
    }
    else{
      let index = (copySelectedCities.indexOf(event.target.value));
          copySelectedCities.splice(index,1);
        }
  this.setState({selectedCities:copySelectedCities,check:(!this.state.check)});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({visitedCities:this.state.selectedCities});
  }
  DisplayTheVisitedCities(){
    if(this.state.visitedCities.length!==0)
    return (`I have visited these places ${this.state.visitedCities}`);
  }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <p>Which of the following cities you have visited ?</p>
            {this.renderCityOptions()}
             <input type='submit' value='greet'/>
            <h3>{this.DisplayTheVisitedCities()}</h3>
            </form>
            );
    }
}
export{Visited};
