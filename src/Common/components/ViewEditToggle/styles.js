import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ViewToggle = styled.div`
  ${tw` w-full h-auto bg-gray-300 p-4 flex flex-col justify-center items-center`}
`;
const Heading = styled.p`
  ${tw`font-bold text-xl`}
`;

const Input = styled.input`
  ${tw`m-1`}
`;

const Button = styled.button`
  ${tw`bg-blue-600 text-white p-1 rounded m-1`}
`;

export { ViewToggle, Heading, Input, Button };
