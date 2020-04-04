import React from 'react';
class Footer extends React.Component{
    render(){
        return(
          <div class="navBar">
          <span>{this.props.value} items left</span>
          <button class="common-border-buttons" onClick={this.props.allItems}>All</button>
          <button class="common-border-buttons" onClick={this.props.active}>Active</button>
          <button class="common-border-buttons" onClick={this.props.completed}>Completed</button>
          <button class="common-border-buttons" onClick={this.props.allClear}>Clear completed</button>
        </div>
            );
    }
}
export {Footer};