/* eslint-disable default-case */
import { observable, action, computed} from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import Product from '../Models/ProductModel'

class ProductStore {  
   @observable productList	
   @observable getProductListAPIStatus	
   @observable getProductListAPIError
   @observable productsAPIService
   @observable sizeFilter
   @observable sortBy


  constructor(productService) {
    this.productList=[]	
    this.getProductListAPIStatus=API_INITIAL
    this.getProductListAPIError=null
    this.productsAPIService=productService
    this.sizeFilter=[]
    this.sortBy='SELECT'
    }
    

    @action.bound
  getProductList() {
    const ProductPromise = this.productsAPIService.getProductsAPI()
    return bindPromiseWithOnSuccess(ProductPromise)
    .to(this.setGetProductListAPIStatus,this.setProductListResponse)
    .catch(this.setGetProductListAPIError)
  }

  @action.bound
  setProductListResponse(productsResponse) {
    productsResponse.map(eachProduct => this.onAddJsonData(eachProduct))
  }

  @action.bound
  onAddJsonData(productObject) {
    let addingEachProduct = {
      id :productObject.id,
      availableSizes :productObject.availableSizes,
      currencyFormat	:productObject.currencyFormat,
      currencyId	:productObject.currencyId,
      description :productObject.description,	
      installments :productObject.installments,
      isFreeShipping	:productObject.isFreeShipping,
      price :productObject.price,
      print	:productObject.style,
      title :productObject.title,
      image :productObject.image
    };
    const product=new Product(addingEachProduct)
    this.productList.push(product)
  }

  @action.bound
  setGetProductListAPIError(error) {
    this.getProductListAPIError = error
  }

  @action.bound
  setGetProductListAPIStatus(apiStatus) {
    this.getProductListAPIStatus = apiStatus
  }

  @action.bound
  onChangeSortBy(price){
    this.sortBy=(price==="Lowest to highest")?"ASCENDING":"DECENDING"
  }

  @action.bound
  onSelectSize(size){
    let sameSize=0
    let sizes=[]
    if(this.sizeFilter.length>0){
    sizes=this.sizeFilter.filter(item=>{
      if(item!==size){
        return item
      }
      else{
        sameSize+=1
      }
      
    })
  }
    if(sameSize===0){
      sizes.push(size)
    }
    this.sizeFilter=sizes;
  }

  @computed
  get totalNoOfProductsDisplayed(){
    const noOfProducts=this.products
    return noOfProducts.length
  }

  @computed 
  get sortedAndFilteredProducts(){
    const filtered=this.products
    return filtered
  }

  @computed
  get products(){
    let display=this.productList
  if(this.sizeFilter.length>0){
  display=this.productList.filter(item=>{
    if(this.sizeFilter.filter(size=>item.availableSizes.includes(size)).length){
      return item
   }})
  
}
if(this.sortBy==="ASCENDING")
     display =display.sort((a,b)=> (a.price-b.price));
else if(this.sortBy==="DECENDING")
      display =display.sort((a,b)=> (b.price-a.price));

return display
  }
}

export default ProductStore;