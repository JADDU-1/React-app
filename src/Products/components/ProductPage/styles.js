import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const TotalPage=styled.div`${tw`flex  flex-col `}`;
const SignOut=styled.button`${tw`m-2 h-10 p-1 border border-black rounded `}`;
const PageHeader=styled.div`${tw`flex justify-between`}`;

export{TotalPage,SignOut,PageHeader}