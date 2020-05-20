import styled from "@emotion/styled";
import tw from "tailwind.macro";

const DisplayText = styled.div`
  ${tw` w-full bg-gray-300 p-2  flex flex-col justify-center items-center`}
`;
const Heading = styled.h1`
  ${tw`font-bold text-xl`}
`;

export { DisplayText, Heading };
