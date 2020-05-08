import CartStore from "./index";
import ProductStore from "../ProductStore";
import getUserProductResponse from "../../fixtures/getProductResponse/index.json";



describe("ProductStore Tests", () => {

    let cartStore
    let productStore
  
    beforeEach(() => {
        productStore=new ProductStore()
      cartStore = new CartStore(productStore);

    })

    it("should test initialising cart store", () => {
        expect(cartStore.cartProductList).toEqual([]);
    })

    it("should test Add to cart", () => {
        let productId=5
        productStore.setProductListResponse(getUserProductResponse)
        cartStore.onClickAddToCart(productId)
        let filtered= cartStore.cartProductList.find(item => productId === item.productId )
        expect(filtered.quantity).toBe(1);
        
        let result=cartStore.getProductDetailsById(3)
        expect(result.price).toBe(1147)
        
        
        cartStore.onClickAddToCart(productId)
        filtered= cartStore.cartProductList.find(item => productId === item.productId )
        expect(filtered.quantity).toBe(2);

        expect(cartStore.noOfProductsInCart).toEqual(2);
        expect(Number(cartStore.totalCartAmount)).toBeCloseTo(1690.48)

    })

    it("should test Remove the items from the cart", () => {
        let cartId=4
        cartStore.cartProductList=[{cartId:1},{cartId:2},{cartId:3},{cartId:4}]
        cartStore.onRemoveCartItem(cartId)
        expect(cartStore.cartProductList).toEqual([{cartId:1},{cartId:2},{cartId:3}])

    })

    it("should test clear all the items from the cart", () => {
        cartStore.cartProductList=[{cartId:1},{cartId:2},{cartId:3},{cartId:4}]
        cartStore.clearCart()
        expect(cartStore.cartProductList).toEqual([])
    })
})