import React from 'react'
import { observer,inject } from 'mobx-react'
import {EachProduct,Image,AddButton,FreeShipping} from './styles.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Tostify from '../../Tostify'

@inject('cartStore')
@observer 
class Product extends React.Component {
  notify = () => toast("Product added to your cart!");

  onClickAddToCart = (event) => {
    //const {eachProduct}=this.props
    this.notify()
    this.props.cartStore.onClickAddToCart(event.target.id)
  }

  render() {
    const {eachProduct} = this.props;
    let installment=parseFloat((eachProduct.price)/eachProduct.installmentsCount).toFixed(2)
    return (
        <EachProduct>
            <FreeShipping isFreeShipping={eachProduct.isFreeShipping}>
                {eachProduct.isFreeShipping ? 'Free shipping' : ''}
            </FreeShipping>
            <ToastContainer />
            <Image src={eachProduct.imageURL}></Image>
            <p>{eachProduct.title}</p>
            <p>{eachProduct.currencyFormat}{eachProduct.price}</p>
            <p>or {eachProduct.installmentsCount}x{eachProduct.currencyFormat}{installment}</p>
            <AddButton id={eachProduct.productId} onClick={this.onClickAddToCart}>Add to cart</AddButton>
        </EachProduct>
    );
  }
}

export default Product;
 