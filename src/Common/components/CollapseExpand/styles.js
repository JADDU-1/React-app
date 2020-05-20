import styled from "@emotion/styled";
import tw from "tailwind.macro";

const CollapseView = styled.div`
  ${tw` w-full  bg-gray-400 p-2 flex flex-col justify-start items-center`}
`;
const Button = styled.button`
  ${tw`bg-blue-600 text-white p-1 rounded m-1`}
`;
const Heading = styled.p`
  ${tw`font-bold text-xl `}
`;
const List = styled.div`
  ${tw`flex flex-col items-end`}
`;

const Collapse = styled.div`
  ${tw` `}
`;
export { CollapseView, Button, Heading, List, Collapse };
