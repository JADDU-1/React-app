import React, { Component } from 'react';
import {CheckoutButton} from './styles'
class Checkout extends Component {

    checkOut=()=>{
        this.props.clearCart()
    }
    render() {
        const {total}=this.props
        return (
                <CheckoutButton disabled={total > 0? false:true } onClick={this.checkOut}>CHECKOUT</CheckoutButton>
        );
    }
}

export default Checkout;