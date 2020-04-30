import React, { Component } from 'react';
import { observer,inject } from "mobx-react";
import { FiShoppingCart } from 'react-icons/fi';
import {CartContainer,CartImage,CartPage,CloseButton,InnerCartImage,CartHeading,SelectedProducts} from "./styles"
import CartItem from '../CartItem'
import { observable } from "mobx";

@inject('cartStore')
@observer
class CartList extends Component {
    @observable display=false
    
    onClickCart=()=>{
        this.display=!this.display
    }
    
    render() {
        const {getProductDetailsById,onRemoveCartItem,cartProductList}=this.props.cartStore
        return (
        <CartContainer display={this.display} >
            <CartImage display={this.display} onClick={this.onClickCart}>{<FiShoppingCart/>}</CartImage>
            <CartPage display={this.display}>
                <CloseButton onClick={this.onClickCart}>X</CloseButton>
                <SelectedProducts>
                    <InnerCartImage>{<FiShoppingCart/>}</InnerCartImage>
                    <CartHeading>Cart</CartHeading>
                </SelectedProducts>
                {cartProductList.map(product=>
                    <CartItem cartItem={product} getProductDetailsById={getProductDetailsById} onRemoveCartItem={onRemoveCartItem}/>
                )}
            </CartPage>
        </CartContainer>
        );
    }
}

export default CartList;