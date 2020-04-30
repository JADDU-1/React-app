import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const CartContainer=styled.div`${tw`bg-black flex flex-col border text-base text-white`}`;
const CloseButton=styled.button`${tw` `}`;
const Products=styled.div`${tw`text-base `}`;
const Image=styled.image`${tw` h-20 `}`;
const Details=styled.div`${tw` `}`;
const Cost=styled.div`${tw` `}`;

export{CartContainer,CloseButton,Products,Image,Details,Cost}


