import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import { ArrowButton, Text } from './styles'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

@inject('productStore')
@observer
class Pagination extends Component {
   @observable pageNumber = 0
   @observable currentPage = 1

   @action.bound
   pageCall() {
      const { nextPage } = this.props.productStore
      nextPage(this.pageNumber)
   }
   @action.bound
   previousPage() {
      if (this.currentPage > 1) {
         const { productsLimit } = this.props.productStore
         this.pageNumber -= productsLimit
         this.currentPage -= 1
      }
      this.pageCall()
   }
   @action.bound
   nextPage() {
      const { totalPages, productsLimit } = this.props.productStore
      if (this.currentPage < totalPages) {
         this.pageNumber += productsLimit
         this.currentPage += 1
      }
      this.pageCall()
   }
   render() {
      const { totalPages } = this.props.productStore
      return (
         <div>
            <ArrowButton onClick={this.previousPage}>
               <MdKeyboardArrowLeft />
            </ArrowButton>
            <Text>
               {this.currentPage} / {totalPages}
            </Text>
            <ArrowButton onClick={this.nextPage}>
               <MdKeyboardArrowRight />
            </ArrowButton>
         </div>
      )
   }
}

export default Pagination
