import styled from '@emotion/styled'
import tw from 'tailwind.macro'
//fixed top-0 right-0 text-yellow-500 z-20 mx-3 my-1

const CartContainer = styled.div`
   ${tw`bg-gray-900 flex fixed top-0 right-0 flex-col z-10 `};
   height: ${props => (props.display === 'false' ? '60px' : '600px')};
   width: ${props => (props.display === 'false' ? '60px' : '400px')};
`

const CartImage = styled.button`${tw`text-5xl text-white m-2`}
display:${props => (props.display === 'true' ? 'none' : 'flex')}`

const CartPage = styled.div`${tw` text-white flex justify-between flex-col -mt-8  h-full`}
display:${props => (props.display === 'false' ? 'none' : 'flex')}`

const CloseButton = styled.button`${tw`text-xl p-2  text-white bg-gray-900 -ml-6 `}
display:${props => (props.display === 'false' ? 'none' : 'flex')}`

const InnerCartImage = styled.span`
   ${tw`text-5xl  text-white `}
`
const CartHeading = styled.span`
   ${tw` ml-4 `}
`

const Products = styled.div`
   ${tw` flex flex-col justify-start overflow-y-auto`}
`

const SelectedProducts = styled.div`
   ${tw`flex text-xl  justify-center m-2 `}
`

const CheckOutTag = styled.div`
   ${tw`flex flex-col justify-center w-auto m-4 border-t border-gray-600 h-32 `}
`

//const Count=styled.div`${tw` text-xs text-yellow-500 flex justify-center items-center -mt-10 `}`;
const Count = styled.div`${tw` fixed top-3 right-2 text-yellow-500 z-20 mx-8 my-4 `}
display:${props => (props.display === 'true' ? 'none' : 'flex')}`

export {
   CartContainer,
   CartImage,
   CartPage,
   CloseButton,
   InnerCartImage,
   CartHeading,
   SelectedProducts,
   Products,
   CheckOutTag,
   Count
}
