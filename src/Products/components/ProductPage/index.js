import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
import {action} from 'mobx'
import ProductList from '../ProductList'
import {TotalPage,SignOut,PageHeader} from './styles'
import CartList from '../CartList'
@inject('productStore','authStores')
@observer
class ProductPage extends Component {

    componentDidMount() {
        this.props.productStore.getProductList()
      }

      doNetworkCalls = () => {
        this.props.productStore.getProductList()
      }
        @action.bound
        onClickSignOut(){
            const {history}=this.props;
            history.replace({
                pathname:'/SignInPage'
            });
            this.props.authStores.signOut()
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
                <LoadingWrapperWithFailure 
                  apiStatus = {getProductListAPIStatus}
                  apiError = {getProductListAPIError}
                  onRetryClick = {this.doNetworkCalls} 
                  renderSuccessUI = {this.renderProducts} />
            </TotalPage>
        );
    }
}

export default ProductPage;

