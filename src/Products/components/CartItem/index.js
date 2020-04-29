import React, { Component } from 'react';
import { observer,inject } from "mobx-react";
import {CartContainer} from "./styles"

@inject('cartStore')
@observer
class CartItem extends Component {

    onRemoveCartItem=(event)=>{
        this.props.cartStore.onRemoveCartItem(event.target.id)
    }
    
    render() {
        const {cartStore}=this.props
        return (
        <CartContainer>
            cartItem
        </CartContainer>
        );
    }
}

export default CartItem;