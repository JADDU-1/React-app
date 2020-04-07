import styled from '@emotion/styled';
import tw from 'tailwind.macro';

//<---------------Dashboard Page------------>
const EmojiPage=styled.div`
      ${tw` `}
     color: ${props => props.theme.textColor};
    background: ${props => props.theme.background};
`;
      
const EmojiListStyles=styled.div`
      ${tw`flex flex-wrap justify-center items-center `}
    background: ${props => props.theme.emojisBackground};
    `;

//<---------------Header Page--------------->
const HeaderStyles=styled.div`
      ${tw`flex justify-between text-lg items-center font-bold p-4`}`; 
      
const HeaderUpdateStyles=styled.div`
      ${tw`flex justify-between items-center w-3/6 `}`;
      
const HeaderName=styled.h1`
      ${tw`  text-2xl`}`; 

const ThemeButtonStyles=styled.button`
      ${tw` border border-black p-2`}
      border-color: ${props => props.theme.textColor}`;
      
//<----------------Card------------------------>
      
const EmojiCardStyle=styled.div`
      ${tw`flex  flex-col w-3/12 items-center shadow-lg m-4 h-64 `}
      
  background: ${props => props.theme.cardColor};
`;
      
      
const Image=styled.img`
      ${tw`h-48 `}`;
//<--------------statusDispaly-------------->

const GameStatusDispaly=styled.div`
      ${tw`h-screen flex flex-col justify-center items-center text-4xl`}`;
      
const PlayAgain=styled.button`
      ${tw` text-white bg-blue-600 text-2xl p-2 rounded `}`;
      
const GameState=styled.h1`
      color: ${props => props.text==="You Won" ? '#38a169':'#f56565'}`;
      
//<------------------Footer---------------->
const FooterStyles=styled.div`
      ${tw` p-4 `}`;
const FooterHeading=styled.h1`
      ${tw` text-xl font-bold`}`;
const FooterText=styled.h1`
      ${tw` text-lg p-4`}`;
export{EmojiPage,HeaderStyles,ThemeButtonStyles,HeaderName,HeaderUpdateStyles,
EmojiCardStyle,Image,EmojiListStyles,GameStatusDispaly,PlayAgain,GameState,FooterStyles,FooterHeading,FooterText};