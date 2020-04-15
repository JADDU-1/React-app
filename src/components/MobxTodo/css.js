import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TodoPage=styled.div`${tw`flex justify-center items-center flex-col text-3xl h-screen`}`;
const TitleText=styled.div`${tw` text-6xl text-red-400`}`;

const TodoSet=styled.div`${tw`flex justify-between items-center`}`;
const CheckBox=styled.input`
${tw`p-4 `};
background: ${props => (props.status===true)? '#38a169':'#cbd5e0'};
`;

const TodoText=styled.input`
${tw`flex-grow text-2xl`};
text-decoration: ${props => (props.status===true)? 'line-through':'none'};
user-select:${props => (props.status===false)? 'text':'none'};
`;

const Button=styled.input`${tw`text-red-600`}`;

const FooterStyles=styled.div`${tw`text-xl flex justify-between`}`;

export{TodoPage,TitleText,CheckBox,TodoText,Button,FooterStyles,TodoSet};
