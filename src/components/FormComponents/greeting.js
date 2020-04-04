import React from 'react';

class Greeting extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        userInputText:'',
        displayName: ''
    };
 }
    
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.userInputText !==''){
    this.setState({
        displayName:(`Hello ${this.state.userInputText},have a nice day!`),
        userInputText:''});
    }
  }
  handleUserInput = (event) => {
      this.setState({userInputText:event.target.value});
  }
  Display(){
      return this.state.displayName;
  }
  
  render() {
    return (
        <div>
        
      <form onClick={this.handleSubmit}>
        <input type='text' onChange={this.handleUserInput} value={this.state.userInputText}  placeholder='Enter the name' />
         <br/>
         <input type='submit' value='Greet'/>
         <h3>{this.Display()}</h3>
      </form>
      </div>
    );
  }
}
export{Greeting}
