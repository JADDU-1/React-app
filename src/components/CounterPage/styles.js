import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const CounterPage=styled.button`${tw` flex items-center  justify-around w-56 m-6`}`;
const Buttons=styled.button`${tw` bg-blue-500 h-12 text-2xl w-10 text-white rounded`}`;
const Input=styled.input`${tw` text-2xl border border-orange-400 h-12 w-16 text-center`}`;
const TotalPage=styled.div`${tw`flex justify-center items-center flex-col text-3xl h-screen`}`;

export{Buttons,CounterPage,Input,TotalPage};