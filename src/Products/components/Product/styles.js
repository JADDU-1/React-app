import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const EachProduct=styled.div`${tw`flex flex-col border  w-2/12 m-10 items-center`}`;
const Image=styled.img`${tw`h-auto w-full object-cover `}`;
const AddButton=styled.button`${tw`bg-black text-white w-full p-3 rounded `}`;
export{EachProduct,Image,AddButton}