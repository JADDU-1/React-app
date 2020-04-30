/* eslint-disable default-case */
import { observable, action, computed} from 'mobx'
import CartItem from "../Models/CartItem"

class CartStore {
  @observable cartProductList
  productStore
  
  constructor(productStore) {
    this.cartProductList = []
    this.productStore=productStore//.productList
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
     const product= this.productStore.productList.filter(item=>item.productId===Number(id))
     return product[0]
  }

  @computed get totalCartAmount(){
      return "price"
  }

  @computed get noOfProductsInCart(){
      return this.cartProductList.length
  }

}

export default CartStore;