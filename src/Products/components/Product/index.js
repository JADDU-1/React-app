import React from 'react'
import { observer,inject } from 'mobx-react'
import {EachProduct,Image,AddButton} from './styles.js'

@inject('cartStore')
@observer 
class Product extends React.Component {

  onClickAddToCart = () => {
    const {eachProduct}=this.props
    this.props.cartStore.onClickAddToCart(eachProduct.productId)
  }

  render() {
    const {eachProduct} = this.props;
    let installment=parseFloat((eachProduct.price)/eachProduct.installmentsCount).toFixed(2)
    return (
        <EachProduct>
            <Image src={eachProduct.imageURL}></Image>
            <p>{eachProduct.title}</p>
            <p>{eachProduct.currencyFormat}{eachProduct.price}</p>
            <p>or {eachProduct.installmentsCount}x{eachProduct.currencyFormat}{installment}</p>
            <AddButton onClick={this.onClickAddToCart}>Add to cart</AddButton>
        </EachProduct>
    );
  }
}

export default Product;