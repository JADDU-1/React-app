import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const CartContainer=styled.div`${tw` flex text-base text-white justify-between  border-t m-2 p-2`}`;
const CloseButton=styled.button`${tw` `}`;
const Products=styled.div`${tw`text-base text-white`}`;
const Image=styled.img`${tw` h-20 `}`;
const Details=styled.div`${tw` text-white flex flex-col justify-start items-start`}`;
const Cost=styled.div`${tw` text-white flex flex-col`}`;

export{CartContainer,CloseButton,Products,Image,Details,Cost}


