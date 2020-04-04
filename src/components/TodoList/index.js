import React from 'react';
class Todoinput extends React.Component{
    
    render(){
            return(
            <div class='addUserInputClass'>
                <input id={this.props.id} type="checkBox" className = 'checkClass' onClick={this.props.checks} checked={this.props.status} style={{backgroundColor: this.props.status? 'green': 'lightgrey'}}/>
                <input id={this.props.id} onChange={this.props.value} type='text' defaultValue={this.props.text} className = {(this.props.status===false)?'textClass':'checkNew'} disabled={(this.props.status===false)?false:true}/>
                <button id={this.props.id} className = 'closeClass' onClick={this.props.remove}>X</button>
            </div>
            );
    }
}
export {Todoinput};
