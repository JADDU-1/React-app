import React, { Component } from 'react';
import { observer,inject } from "mobx-react";
import { FiShoppingCart } from 'react-icons/fi';
import {CartContainer,CartImage,CartPage,CloseButton,InnerCartImage,CartHeading,SelectedProducts,Products} from "./styles"
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
                <CloseButton display={this.display} onClick={this.onClickCart}>X</CloseButton>
            <CartPage display={this.display}>
                <SelectedProducts>
                    <InnerCartImage>{<FiShoppingCart/>}</InnerCartImage>
                    <CartHeading>Cart</CartHeading>
                </SelectedProducts>
                <Products>
                {cartProductList.map(product=>
                    <CartItem cartItem={product} getProductDetailsById={getProductDetailsById} onRemoveCartItem={onRemoveCartItem}/>
                )}
                </Products>
            </CartPage>
        </CartContainer>
        );
    }
}

export default CartList;