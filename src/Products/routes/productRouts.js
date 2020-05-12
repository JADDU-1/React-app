import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import {action} from 'mobx'
import {SIGN_IN_PATH} from '../../Authentication/constants/RouteConstants'
import ProductList from '../components/ProductList'
import ProductPage from "../components/ProductPage";


@inject('productStore','authStores','cartStore')
@observer
class ProductRouts extends Component {
    componentDidMount() {
        this.props.productStore.init()
         this.props.productStore.getProductList()
       }
 
       doNetworkCalls = () => {
        this.props.productStore.init()
         this.props.productStore.getProductList()
       }
         @action.bound
         onClickSignOut(){
           this.props.productStore.init()
           this.props.authStores.signOut()
             const {history}=this.props;
             history.replace(SIGN_IN_PATH);
         }
         renderProducts = observer(() => {
             return(<ProductList />)
         })
     

    render() {
        const { getProductListAPIStatus, getProductListAPIError} = this.props.productStore
        return (
           <ProductPage
           doNetworkCalls={this.doNetworkCalls} 
           renderProducts={this.renderProducts} 
           onClickSignOut={this.onClickSignOut}
           getProductListAPIStatus={getProductListAPIStatus}
           getProductListAPIError={getProductListAPIError}
           cartStore={this.props.cartStore}
           />
        );
    }
}

export default ProductRouts;