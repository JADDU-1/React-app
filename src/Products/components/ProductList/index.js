import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Product from '../Product'
import SizeFilter from '../SizeFilter'
import Header from '../Header'
import ProductSort from '../ProductSort'
import {ProductListPage,ProductListContainer,ProductListAndHeader,HeaderPart} from './styles.js'
@inject('productStore')
@observer
class ProductList extends Component {
    render() {
        const {sortedAndFilteredProducts,onSelectSize, onChangeSortBy,totalNoOfProductsDisplayed}=this.props.productStore
        return (
            <ProductListPage>
                <SizeFilter onSelectSize={onSelectSize} />
                <ProductListAndHeader>
                <HeaderPart>
                    <Header productCount={totalNoOfProductsDisplayed}/>
                    <ProductSort onSelectSortBy={onChangeSortBy}/>
                </HeaderPart>
                <ProductListContainer>
                    {sortedAndFilteredProducts.map(product=><Product key={product.productId} eachProduct={product}/>)}
                </ProductListContainer>
                </ProductListAndHeader>
            </ProductListPage>
        );
    }
}

export default ProductList;