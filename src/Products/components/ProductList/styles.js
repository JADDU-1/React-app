import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const ProductListPage=styled.div`${tw`flex w-full m-6`}`;
const ProductListContainer=styled.div`${tw`flex  flex-wrap `}`;
const ProductListAndHeader=styled.div`${tw` w-10/12 `}`;
const HeaderPart=styled.div`${tw`flex justify-between`}`;
const SizeButtons=styled.div`${tw`w-1/6 mr-4`}`;

export{ProductListPage,ProductListContainer,ProductListAndHeader,HeaderPart,SizeButtons}