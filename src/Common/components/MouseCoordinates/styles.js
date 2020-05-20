import styled from "@emotion/styled";
import tw from "tailwind.macro";

const MouseHover = styled.div`
  ${tw` w-full bg-gray-300 p-2  flex flex-col justify-center items-center`}
`;
const Heading = styled.p`
  ${tw`font-bold text-xl`}
`;

export { MouseHover, Heading };
