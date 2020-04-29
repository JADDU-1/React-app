import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const Sizes=styled.div`${tw`flex w-auto flex-wrap justify-between`}`;
const SizeButton=styled.button`${tw`bg-gray-400 p-1 m-1 rounded-full`}`;
const SizeHeading=styled.p`${tw`font-bold`}`;
const SizeContainer=styled.div`${tw`flex flex-col w-11/12`}`;

export{Sizes,SizeButton,SizeHeading,SizeContainer}