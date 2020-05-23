import React from 'react'

import { NoDataViewContainer, NoDataViewText } from './styledComponents'

class NoDataView extends React.Component {
   render() {
      return (
         <NoDataViewContainer {...this.props}>
            <NoDataViewText>No data found!</NoDataViewText>
         </NoDataViewContainer>
      )
   }
}

export default NoDataView
