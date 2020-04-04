import styled from '@emotion/styled';
import tw from 'tailwind.macro';

//<---------------Dashboard Page------------>
const EmojiPage=styled.div`
      ${tw` `}
     color: ${props => props.theme.textColor};
    background: ${props => props.theme.background};
`;
      
const EmojiListStyles=styled.div`
      ${tw`flex flex-wrap justify-center items-center bg-gray-300 `}`;


//<---------------Header Page--------------->
const HeaderStyles=styled.div`
      ${tw`flex justify-between text-lg items-center font-bold p-4`}`; 
      
const HeaderUpdateStyles=styled.div`
      ${tw`flex justify-between items-center w-3/6 `}`;
      
const HeaderName=styled.h1`
      ${tw`  text-2xl`}`; 

const ThemeButtonStyles=styled.button`
      ${tw` border border-black p-2`}`; 
      
//<----------------Card------------------------>
      
const EmojiCardStyle=styled.div`
      ${tw`flex  flex-col w-3/12 items-center shadow-lg m-4 h-64 `}
      
  background: ${props => props.theme.cardColor};
`;
      
      
const Image=styled.img`
      ${tw`h-48 `}`;

      
export{EmojiPage,HeaderStyles,ThemeButtonStyles,HeaderName,HeaderUpdateStyles,EmojiCardStyle,Image,EmojiListStyles};