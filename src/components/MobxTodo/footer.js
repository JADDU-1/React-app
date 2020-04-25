import React from 'react';
import {FooterStyles,FooterButton} from'./css.js';

class Footer extends React.Component{
    render(){
        const {todosCount,allItems,active,completed,allClear}=this.props;
        return(
          <FooterStyles>
            <span>{todosCount} items left</span>
          <FooterButton  onClick={allItems}>All</FooterButton>
          <FooterButton  onClick={active}>Active</FooterButton>
          <FooterButton  onClick={completed}>Completed</FooterButton>
          <FooterButton  onClick={allClear}>Clear completed</FooterButton>
        </FooterStyles>
            );
    }
}
export {Footer};