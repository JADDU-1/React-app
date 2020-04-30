/* eslint-disable default-case */
import { observable, action, computed} from 'mobx'
import CartItem from "../Models/CartItem"

class CartStore {
  @observable cartProductList
  @observable productStore
  
  constructor(productStore) {
    this.cartProductList = []
    this.productStore=productStore.productList
  }
  @action.bound
  onClickAddToCart(productId) {
      let addingProduct = {
        cartId : Math.random().toString(),
        productId : productId,
        quantity : 0
      };
      const productObject=new CartItem(addingProduct)
      this.cartProductList.push(productObject)
    }

  @action.bound
  onRemoveCartItem(id){
    let filteredItems = this.cartProductList.filter(item => item.cartId !== id)
    this.cartProductList = filteredItems
  }

 
  @action.bound
  clearCart(){
    this.cartProductList=[]
  }

  @action.bound
  getProductDetailsById(id){
     const product= this.productStore.filter(item=>item.productId===id)
     return product
  }

  @computed get totalCartAmount(){
      return "price"
  }

  @computed get noOfProductsInCart(){
      return this.cartProductList.length
  }

}

export default CartStore;