import React from 'react';
class YourState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            statesList:this.props.states,
            selectedState:'',
            submittedState:''
        };
    }
    handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.selectedState !==''){
    this.setState({submittedState: `I am from ${this.state.selectedState}`});
    }
  }
  handleUserInput = (event) => {
    this.setState({selectedState:event.target.value});
    
  }
  displayMessage(){
      return (this.state.submittedState);
  }
  
  renderTheOptions=()=>{
  const map= this.state.statesList.map((item,index)=>
         <StateOptions key={index} id={index} value={item}/>);
        return map;
  }
  
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
             <select onChange={this.handleUserInput}>
             {this.renderTheOptions()}
             </select>
             <br/>
              <input type='submit' value='Submit'/>
            <h3>{this.displayMessage()}</h3>
            </form>
            );
    }
}

class StateOptions extends React.Component{
  render(){
    return(
          <option  id={this.props.id}>{this.props.value}</option>
      );
  }
}

export{YourState};

    
  
  
  
    
    

