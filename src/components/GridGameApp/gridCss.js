import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const GridGamePage=styled.div`
      ${tw` flex flex-col justify-center items-center h-screen `}
      background:${props=>(props.themeObject.gridGameBackground)};
      color:${props=>(props.themeObject.textColor)}
      
`;
const Header=styled.div`
      ${tw`flex flex-col justify-around items-center`}
`;
const LevelAndThemeStyles=styled.div`
      ${tw`flex justify-between items-center m-4`}
      width: ${props => props.width}px;
`;
const Button=styled.button`
      ${tw`border text-xl p-2`}
      border-color:${props=>(props.themeObject.textColor)}
`;
const TopLevel=styled.p`
      ${tw`text-xl m-4`}
`;
const Level=styled.p`
      ${tw`text-xl`}
`;
const CellContainer=styled.div`
      ${tw`  `}
     width: ${props => props.width}px;
`;
const CellButton=styled.button`
      ${tw` m-1 `}
     width: ${props => props.width}px;
     height: ${props => props.width}px;
     background: ${props => props.backgroundColor};
           
`;
const ResultStyle=styled.div`
      ${tw`flex flex-col justify-around items-center`}
`;
const ResultLevel=styled.p`
      ${tw`text-3xl font-bold`}
`;
const ResultMessage=styled.p`
      ${tw`text-2xl text-green-500 font-bold m-6`}
`;
const PlayAgain=styled.p`
      ${tw`text-xl bg-blue-600 text-white p-2 rounded`}
`;
export{CellButton,CellContainer,GridGamePage,Header,LevelAndThemeStyles,Button,TopLevel,Level,ResultStyle,ResultLevel,ResultMessage,PlayAgain}
// background:${props=>(props.themeObject.text==="Light Mode" && props.background===true && props.timer===true)? '#48bb78':'#2a4365'};
  //background:${props=>(props.background===true && props.timer===true)? '#90cdf4':'#2a4365'}; 