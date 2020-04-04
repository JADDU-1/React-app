import React from 'react';
class CitiesList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <input type='checkbox' id={this.props.id} defaultchecked={this.props.check} value={this.props.value} onClick={this.props.clicked}/>
             <span> {this.props.value}</span>
             </div>
        );
    }
}
export{CitiesList}