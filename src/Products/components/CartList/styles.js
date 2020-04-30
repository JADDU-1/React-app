import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const CartContainer=styled.div`${tw`bg-black items-center justify-center`};
height:${props=>props.display===false?'50px':'600px'};
width:${props=>props.display===false?'70px':'400px'}`;

const CartImage=styled.button`${tw`text-5xl text-white `}
display:${props=>props.display===true?'none':'flex'}`;

const CartPage=styled.div`${tw` text-white `}
display:${props=>props.display===false?'none':'flex'}`;

const CloseButton=styled.button`${tw`text-xl p-1 text-white `}`;
const InnerCartImage=styled.span`${tw`text-5xl h-16 text-white `}`;
const CartHeading=styled.span`${tw`  `}`;

const SelectedProducts=styled.div`${tw`flex text-xl  justify-center `}`;

export{CartContainer,CartImage,CartPage,CloseButton,InnerCartImage,CartHeading,SelectedProducts}