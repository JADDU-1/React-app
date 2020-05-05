import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
import {action} from 'mobx'
import {SIGN_IN_PATH} from '../../../Authentication/constants/RouteConstants'
import ProductList from '../ProductList'
import {TotalPage,SignOut,PageHeader,Products} from './styles'
import CartList from '../CartList'
@inject('productStore','authStores')
@observer
class ProductPage extends Component {

    componentDidMount() {
       this.props.productStore.init()
        this.props.productStore.getProductList()
      }

      doNetworkCalls = () => {
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
            const { getProductListAPIStatus, getProductListAPIError } = this.props.productStore
        return (
            <TotalPage>
              <PageHeader>
                <SignOut onClick={this.onClickSignOut}>Sign out</SignOut>
                <CartList />
              </PageHeader>
              <Products>
                <LoadingWrapperWithFailure 
                  apiStatus = {getProductListAPIStatus}
                  apiError = {getProductListAPIError}
                  onRetryClick = {this.doNetworkCalls} 
                  renderSuccessUI = {this.renderProducts} />
              </Products>
            </TotalPage>
        );
    }
}

export default ProductPage;

