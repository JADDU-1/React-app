import styled from "@emotion/styled";
import tw from "tailwind.macro";

const Wrapper = styled.div`
  ${tw`mt-8 w-screen h-screen flex flex-col justify-start items-center`}
`;
const Heading = styled.h1`
  ${tw`font-bold text-3xl m-1`}
`;

const MouseHover = styled.div`
  ${tw` w-full bg-gray-300 p-2  flex flex-col justify-center items-center`}
`;

export { Wrapper, Heading, MouseHover };
