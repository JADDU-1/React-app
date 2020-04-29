import React from 'react';
import { observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Product extends React.Component {
    @observable productId =0
    @observable availableSizes = []
    @observable currencyFormat 	
    @observable currencyId			
    @observable description	=''
    @observable installmentsCount=0
    @observable isFreeShipping =false
    @observable price =0
    @observable printStyle=''
    @observable title=''
    @observable imageURL=''	

    constructor(productObject) {
        super(productObject)
        this.productId =productObject.id
        this.availableSizes =productObject.availableSizes
        this.currencyFormat	=productObject.currencyFormat
        this.currencyId	=productObject.currencyId
        this.description =productObject.description	
        this.installmentsCount =productObject.installments
        this.isFreeShipping	=productObject.isFreeShipping
        this.price =productObject.price
        this.printStyle	=productObject.style
        this.title =productObject.title
        this.imageURL =productObject.image
    }   
}
export default Product;