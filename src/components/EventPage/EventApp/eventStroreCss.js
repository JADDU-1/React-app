import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const Wrapper = styled.div `
    ${tw`
        flex flex-col m-8 border border-gray-600 border-2 rounded items-center
    `}
`;

const EventTitle = styled.p `
    ${tw`
        text-white bg-gray-800 text-center w-full p-1 text-sm
    `}
`;

const AddEvent = styled.div `
    ${tw`
        border border-gray-600 border-2 flex justify-around my-8 items-center p-2
    `}
`;

const EventDetails = styled.div `
    ${tw`
        flex flex-col justify-center w-2/4
    `}
`;

const EventName = styled.input `
    ${tw`
    border border-gray-600 border-2 my-4 text-xs p-1 w-full
    `}
`;

const EventLocation = styled.input `
    ${tw`
    border border-gray-600 border-2 my-4 text-xs p-1 w-full
    `}
`;

const AddEventButton = styled.button `
    ${tw`
    border border-gray-600 border-2 h-8 text-xs px-2 rounded
    `}
`;

const RenderingEventsList = styled.div `
    ${tw`
        w-10/12 flex flex-col border border-gray-600 border-2 items-center my-4
    `}
`;

const NumberOfEvents = styled.div `
    ${tw`
        w-full h-16 flex justify-center items-center
    `}
`;

const EventsList = styled.div `
    ${tw`
        w-full h-full flex flex-col justify-center items-center
    `}
`;

const NoEvents = styled.div `
    ${tw`
        w-9/12 h-20 flex justify-center items-center
    `}
`;

export { Wrapper,EventTitle,AddEvent,EventDetails,EventName,EventLocation,AddEventButton,RenderingEventsList,NumberOfEvents,
    EventsList,NoEvents};