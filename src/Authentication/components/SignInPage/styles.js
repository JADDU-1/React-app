import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TotalPage=styled.div`${tw` w-screen h-screen  bg-gray-300  flex justify-center items-center`}`;
const SignPage=styled.div`${tw` flex flex-col justify-between  border bg-white p-6 rounded `}`;
const Input=styled.input`${tw` border  p-2  m-2`}`;
const Button=styled.button`${tw` bg-black  m-2 text-white  p-2 rounded text-center`}`;
const ErrorMsg=styled.p`${tw` text-red-600 `}`;
const Title=styled.p`${tw` text-black  font-bold m-2 `}`;


export{SignPage,ErrorMsg,Input,Button,Title,TotalPage}