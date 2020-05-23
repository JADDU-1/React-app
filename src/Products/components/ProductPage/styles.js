import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const TotalPage = styled.div`
   ${tw`flex  flex-col  `}
`
const SignOut = styled.button`
   ${tw`m-2 h-10 p-1 border border-black rounded `}
`
const PageHeader = styled.div`
   ${tw`flex justify-between`}
`
const Products = styled.div`
   ${tw`w-full  flex justify-center `}
`

const Footer = styled.div`
   ${tw`flex justify-end p-2 `}
`
export { TotalPage, SignOut, PageHeader, Products, Footer }
