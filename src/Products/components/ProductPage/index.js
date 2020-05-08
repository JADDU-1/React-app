import React, { Component } from 'react';
import { observer} from 'mobx-react'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
//import {action} from 'mobx'
//import {SIGN_IN_PATH} from '../../../Authentication/constants/RouteConstants'
//import ProductList from '../ProductList'
import {TotalPage,SignOut,PageHeader,Products} from './styles'
import CartList from '../CartList'
// @inject('productStore','authStores')
@observer
class ProductPage extends Component {

        render() {
            const { getProductListAPIStatus, getProductListAPIError,doNetworkCalls,renderProducts,onClickSignOut} = this.props
        return (
            <TotalPage>
              <PageHeader>
                <SignOut onClick={onClickSignOut}>Sign out</SignOut>
                <CartList />
              </PageHeader>
              <Products>
                <LoadingWrapperWithFailure 
                  apiStatus = {getProductListAPIStatus}
                  apiError = {getProductListAPIError}
                  onRetryClick = {doNetworkCalls} 
                  renderSuccessUI = {renderProducts} />
              </Products>
            </TotalPage>
        );
    }
}

export default ProductPage;

