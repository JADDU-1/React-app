import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const TodoPage=styled.div`${tw`flex w-full items-center flex-col text-3xl h-screen`}`;
const TitleText=styled.div`${tw` text-6xl text-red-400`}`;
const UserInput=styled.input`${tw`w-5/12 flex-grow`}`;

const TodoSet=styled.div`${tw` w-5/12 m-2 flex justify-between items-center`}`;
const CheckBox=styled.input`${tw`bg-red-400`};
background: ${props => (props.status===true)? '#38a169':'#cbd5e0'}`;

const TodoText=styled.input`
${tw`w-10/12 text-2xl`};
text-decoration: ${props => (props.status===true)? 'line-through':'none'};
user-select:${props => (props.status===false)? 'text':'none'}`;

const Button=styled.input`${tw`w-1/12 text-black text-xl hover:bg-red-600 text-white `}`;
const FooterStyles=styled.div`${tw`w-5/12 text-xl flex justify-between`}`;
const FooterButton=styled.button`${tw` border-2 border-white hover:border-red-400`}`;

export{TodoPage,TitleText,CheckBox,TodoText,Button,FooterStyles,TodoSet,FooterButton,UserInput};

