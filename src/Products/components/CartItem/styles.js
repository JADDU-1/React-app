import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const CartContainer=styled.div`${tw`bg-black flex border text-base text-white`}`;
const CloseButton=styled.button`${tw` `}`;
const Products=styled.div`${tw`text-base text-white`}`;
const Image=styled.img`${tw` h-20 `}`;
const Details=styled.div`${tw` text-white `}`;
const Cost=styled.div`${tw` text-white `}`;

export{CartContainer,CloseButton,Products,Image,Details,Cost}


