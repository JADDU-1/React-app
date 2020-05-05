import React, { Component } from 'react';
import {Total,Title,Amount} from './styles'
class SubTotal extends Component {
    render() {
        const {total}=this.props
        return (
            <Total>
                <Title>SUBTOTAL</Title>
                <Amount>{total}</Amount>
            </Total>
        );
    }
}

export default SubTotal;