import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const EachProduct=styled.div`${tw`flex flex-col border  w-2/12 m-10 items-center justify-between`}`;
const Image=styled.img`${tw`h-auto w-full object-cover `}`;
const AddButton=styled.button`${tw`bg-black text-white w-full flex-grow p-3 rounded `}`;
const FreeShipping = styled.p `
  ${tw`
       sticky  bg-black text-xs text-white  text-center absolute  ml-20 p-1
  `}
  width:${props=>props.isFreeShipping?'100px':'0px'}
`;
export{EachProduct,Image,AddButton,FreeShipping}