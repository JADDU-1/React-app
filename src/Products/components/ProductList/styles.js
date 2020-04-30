import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const ProductListPage=styled.div`${tw`flex w-10/12 absolute mt-20 justify-center z-0`}`;
const ProductListContainer=styled.div`${tw`flex flex-wrap items-center justify-center`}`;
const ProductListAndHeader=styled.div`${tw`flex flex-col`}`;
const HeaderPart=styled.div`${tw`flex justify-between`}`;

export{ProductListPage,ProductListContainer,ProductListAndHeader,HeaderPart}