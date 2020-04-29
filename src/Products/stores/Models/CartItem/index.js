import React from 'react';
import { observable, action } from 'mobx';
import {observer} from 'mobx-react';

@observer
class CartItem extends React.Component {
    cartId
    @observable productId=0
    @observable quantity=0

    constructor(cartObject) {
        super(cartObject)
        this.cartId = cartObject.cartId
        this.productId = cartObject.productId
        this.quantity = cartObject.quantity
    }

    @action.bound
    incrementQuantity() {
        this.isCompleted = this.quantity+=1
    }
 
}


export default CartItem;