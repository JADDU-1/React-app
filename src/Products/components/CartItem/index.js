import React, { Component } from 'react';
import {CartContainer,CloseButton,Products,Image,Details,Cost} from "./styles";
//import CartItem from "../../stores/Models/CartItem";



class CartItem extends Component {

    onRemoveCartItem=(event)=>{
        this.props.onRemoveCartItem(event.target.id)
    }
   
    render() {
        const {getProductDetailsById,cartItem}=this.props
        const productDetails=getProductDetailsById(cartItem.productId)
        return (
        <CartContainer status={this.status}>
            <Image src={productDetails.imageURL}></Image>
            <Details>
                <p></p>
                <p>{productDetails.title}</p>
                <p>Quantity{productDetails.quantity}</p>
            </Details>
            <Products>
                <CloseButton id={cartItem.cartId} onClick={this.onRemoveCartItem}>X</CloseButton>
                <p>{productDetails.price}</p>
            </Products>
        </CartContainer>
        );
    }
}

export default CartItem;