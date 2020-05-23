/* eslint-disable default-case */
import { observable, action, computed } from 'mobx'
import CartItem from '../Models/CartItem'

class CartStore {
   @observable cartProductList
   productStore

   constructor(productStore) {
      this.cartProductList = []
      this.productStore = productStore
   }
   @action.bound
   onClickAddToCart(productId) {
      let verify = this.cartProductList.find(
         item => productId === item.productId
      )
      if (verify) {
         verify.incrementQuantity()
      } else {
         let addingProduct = {
            cartId: Math.random().toString(),
            productId: productId,
            quantity: 1
         }
         const productObject = new CartItem(addingProduct)
         this.cartProductList.push(productObject)
      }
   }

   @action.bound
   onRemoveCartItem(id) {
      let filteredItems = this.cartProductList.filter(
         item => item.cartId !== id
      )
      this.cartProductList = filteredItems
   }

   @action.bound
   clearCart() {
      this.cartProductList = []
      alert(`   Thankyou for shopping with us😃.
    Your products will be delivered in 3 days to
    the address mentioned in your profile.`)
   }

   @action.bound
   getProductDetailsById(id) {
      const product = this.productStore.productList.filter(
         item => item.productId === Number(id)
      )
      return product[0]
   }

   @computed
   get totalCartAmount() {
      let totalAmount = 0
      this.cartProductList.forEach(product => {
         let item = this.getProductDetailsById(product.productId)
         totalAmount = product.quantity * item.price
      })
      return totalAmount.toFixed(2)
   }

   @computed
   get noOfProductsInCart() {
      let totalLength = 0
      this.cartProductList.forEach(item => (totalLength += item.quantity))
      return totalLength
   }
}

export default CartStore
