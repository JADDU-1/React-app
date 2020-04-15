import React from 'react';
import {FooterStyles} from'./css.js';

class Footer extends React.Component{
    render(){
        const {value,allItems,active,completed,allClear}=this.props;
        return(
          <FooterStyles>
          <button  onClick={allItems}>All</button>
          <button  onClick={active}>Active</button>
          <button  onClick={completed}>Completed</button>
          <button  onClick={allClear}>Clear completed</button>
        </FooterStyles>
            );
    }
}
export {Footer};