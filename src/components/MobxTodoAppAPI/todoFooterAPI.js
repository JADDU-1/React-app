import React from 'react'
import { action } from 'mobx'
import {FooterStyles,FooterButton} from'./css.js';


class Footer extends React.Component {

    @action.bound
    onChangeSelectedFilter = (event) => {
        const {onChangeSelectedFilter} = this.props
        onChangeSelectedFilter(event.target.value)
    }

    @action.bound
    onClearCompleted() {
        const {onClearCompleted} = this.props
        onClearCompleted('ClearCompleted')
    }

    render() {
        const {getActiveTodosCount} = this.props
        return (
            <FooterStyles>
                <span>{getActiveTodosCount} item left</span>
                <FooterButton  onClick={this.onChangeSelectedFilter} value='All'>All</FooterButton >
                <FooterButton  onClick = { this.onChangeSelectedFilter } value='Active'> Active </FooterButton >
                <FooterButton  onClick={this.onChangeSelectedFilter} value='Completed'>Completed</FooterButton >
                <FooterButton  onClick={this.onClearCompleted} value='ClearCompleted'>Clear completed</FooterButton >
            </FooterStyles>
        );
    }
}
export default Footer;