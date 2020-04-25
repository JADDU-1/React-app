import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const EachEvent = styled.div `
    ${tw`
        flex border border-gray-600 border-2 rounded items-center w-10/12
        justify-between mb-5 px-3
    `}
`;

const EventDetails = styled.div `
    ${tw`
        flex flex-col justify-center w-3/5
    `}
`;


const EventName = styled.input `
    ${tw`
    border border-gray-600 border-2 my-3 mx-1 text-xs w-full p-1
    `};
    
`;

const EventLocation = styled.input `
    ${tw`
    border border-gray-600 border-2 my-3 mx-1 text-xs w-full p-1
    `};
`;

const AddEventButtons = styled.div`
    ${tw`
    flex flex-col p-2
    `}
`;

const EditButton = styled.button`
    ${tw`
    border border-gray-600 border-2 h-8 text-xs px-2 my-1 rounded
    `}
    display: ${props => (props.hide===true)?'flex':'none'};
`;

const DeleteButton = styled.button`
    ${tw`
    border border-gray-600 border-2 h-8 text-xs px-2 my-1 rounded
    `}
    display: ${props => (props.hide===true)?'flex':'none'};
`;

const UpdateButton = styled.button`
    ${tw`
    border border-gray-600 border-2 h-8 text-xs px-2 rounded
    `}
    display: ${props => (props.hide===true)?'none':'flex'};
`;

export { EachEvent,EventDetails,EventName,EventLocation,AddEventButtons,EditButton,DeleteButton,UpdateButton};