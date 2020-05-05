import React, { Component } from 'react';
import {SizeButton} from './styles'
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class EachSize extends Component {
    @observable isClicked = false

    onSelectSize=(event)=>{
        this.props.onSelectSize(event.target.value)
        this.isClicked = !this.isClicked
    }
    render() {
        const{size}=this.props
        return (
            <SizeButton clicked={this.isClicked} onClick={this.onSelectSize} value={size}>{size}</SizeButton>
        );
    }
}

export default EachSize;