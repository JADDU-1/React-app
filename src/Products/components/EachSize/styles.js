import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const SizeButton=styled.button`${tw`bg-gray-400 p-2 m-2 w-10 rounded-full`}
background:${props=> props.clicked===true? "black":"#cbd5e0"};
color:${props=> props.clicked===true? "white":"black"}`;


export{SizeButton}