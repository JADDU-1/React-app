import React from 'react';
class DisableButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
        isDisableButtonChecked:false,
        showMessage:''
        };
    }
  handleSubmit = (event) => {
  event.preventDefault();
  if(!this.state.isDisableButtonChecked){this.setState({showMessage:'I am Enabled'})}
  }
  handleUserInput = (event) => {
    this.setState({isDisableButtonChecked:(!this.state.isDisableButtonChecked),showMessage:'I am Disabled'});
  }
  displayMessage(){
      return (this.state.showMessage);
  }
    render(){
        return (
            <form>
             <input type='checkbox'onClick={this.handleUserInput}/>
             <input type='button' value='Click Me' onClick={this.handleSubmit} disabled={this.state.isDisableButtonChecked}/>
             <h3>{this.displayMessage()}</h3>
            </form>
            );
    }
}
export{DisableButton};


// import React from 'react';
// class DisableButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             parentCount:0
//         };
//     }
//     onParentCounterIncrement=()=>{
//         this.setState({parentCount:this.state.parentCount+1});
//     }
//     render(){
//         return (
//             <ChildCount
//             onParentCounterIncrement={this.onParentCounterIncrement}
//             parentCount={this.state.parentCount}/>
//             );
//     }
// }
// class ChildCount extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             childCount1:0,
//             childCount2:0
//         };
//     }
//     onChildIncrement=()=>{
//         this.props.onParentCounterIncrement();
//         this.setState({childCount1:this.state.childCount1+1});
//     }
//     render(){
//         return (
//             <div>
//             <button onClick={this.onChildIncrement}>click me</button>
//             <p>{this.props.parentCount}</p>
//             <p>{this.state.ChildCount1}</p>
//             <p>{this.state.ChildCount2}</p>
//             </div>
//             );
//     }
// }
// export{DisableButton};
