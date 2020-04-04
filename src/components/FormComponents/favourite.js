import React from 'react';
class Favourite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            favouriteItems:this.props.items,
            selectedDessert:'',
            favoriteDessert:''
        };
    }
    
    handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.selectedDessert !==''){
    this.setState({favoriteDessert: `My favourite desert is ${this.state.selectedDessert}`});
    }
  }
  handleUserInput = (event) => {
    this.setState({selectedDessert:event.target.value});
    
  }
  displayMessage(){
      return (this.state.favoriteDessert);
  }
  renderItemOptions=()=>{
   const map= this.state.favouriteItems.map((item,index)=>
         <FavouriteList key={index} id={index} value={item} clicked={this.handleUserInput}/>);
        return map;
  }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <p>What is your favorite Dessert ?</p>
              {this.renderItemOptions()}
              <input type='submit' value='Make Your Choice'/>
            <h3>{this.displayMessage()}</h3>
            </form>
            
            );
    }
}
class FavouriteList extends React.Component{
  render(){
    return(
      <div>
          <label>
             <input type="radio" id={this.props.id} name="radio" value={this.props.value} onChange={this.props.clicked}/>
             {this.props.value}
          </label>
          <br/>
      </div>
      );
  }
}
export{Favourite};
