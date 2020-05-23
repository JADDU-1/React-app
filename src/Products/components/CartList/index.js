import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { FiShoppingCart } from 'react-icons/fi'
import {
   CartContainer,
   CartImage,
   CartPage,
   CloseButton,
   InnerCartImage,
   CartHeading,
   SelectedProducts,
   Products,
   CheckOutTag,
   Count
} from './styles'
import CartItem from '../CartItem'
import { observable } from 'mobx'
import Checkout from '../CheckOut'
import SubTotal from '../SubTotal'

@observer
class CartList extends Component {
   @observable display = false

   onClickCart = () => {
      this.display = !this.display
   }

   render() {
      const {
         getProductDetailsById,
         noOfProductsInCart,
         onRemoveCartItem,
         cartProductList,
         totalCartAmount,
         clearCart
      } = this.props.cartStore
      let totalAmount = totalCartAmount
      return (
         <CartContainer display={this.display.toString()}>
            <CartImage
               display={this.display.toString()}
               onClick={this.onClickCart}
            >
               {<FiShoppingCart />}
            </CartImage>
            <Count display={this.display.toString()}>
               {noOfProductsInCart}
            </Count>
            <CloseButton
               display={this.display.toString()}
               onClick={this.onClickCart}
            >
               X
            </CloseButton>
            <CartPage display={this.display.toString()}>
               <div>
                  <SelectedProducts>
                     <InnerCartImage>{<FiShoppingCart />}</InnerCartImage>
                     <CartHeading>Cart</CartHeading>
                  </SelectedProducts>
                  <Products>
                     {cartProductList.map(product => (
                        <CartItem
                           cartItem={product}
                           getProductDetailsById={getProductDetailsById}
                           onRemoveCartItem={onRemoveCartItem}
                        />
                     ))}
                  </Products>
               </div>
               <CheckOutTag>
                  <SubTotal total={totalCartAmount} />
                  <Checkout total={totalAmount} clearCart={clearCart} />
               </CheckOutTag>
            </CartPage>
         </CartContainer>
      )
   }
}

export default CartList
