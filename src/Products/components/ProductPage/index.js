import React, { Component } from 'react'
import { observer } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
import { TotalPage, SignOut, PageHeader, Products, Footer } from './styles'
import CartList from '../CartList'
import Pagination from '../Pagination'

@observer
class ProductPage extends Component {
   render() {
      const {
         getProductListAPIStatus,
         getProductListAPIError,
         doNetworkCalls,
         renderProducts,
         onClickSignOut,
         cartStore
      } = this.props
      return (
         <TotalPage>
            <PageHeader>
               <SignOut onClick={onClickSignOut}>Sign Out</SignOut>
               <CartList cartStore={cartStore} />
            </PageHeader>
            <Products>
               <LoadingWrapperWithFailure
                  apiStatus={getProductListAPIStatus}
                  apiError={getProductListAPIError}
                  onRetryClick={doNetworkCalls}
                  renderSuccessUI={renderProducts}
               />
            </Products>
            <Footer>
               <Pagination />
            </Footer>
         </TotalPage>
      )
   }
}

export default ProductPage
