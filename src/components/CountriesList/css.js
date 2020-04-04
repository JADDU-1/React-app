//import React from "react";
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

//<------------Header------------->
const HeaderStyles = styled.div`
 ${tw` 
 flex justify-between items-center p-3 text-xl capitalize`
   
 }`;
const ThemeButton=styled.div`
${tw`flex justify-center items-center`}`;
//<------------search---------->
const SearchAndFilter=styled.div`
${tw`flex p-3 justify-between items-center`}`;

const SearchTag=styled.input`${tw` h-15 shadow-lg p-2`}
color: ${props => props.theme.textColor};
  background: ${props => props.theme.background};
`;
const SearchClass=styled.p`${tw` shadow-lg `}`;
const SelectTag=styled.select`${tw` h-10 shadow-lg `}`;
//<---------------country--------->
const Country=styled.div`${tw` flex justify-around items-center flex-wrap `}`;
const CountryAddress=styled.p`${tw` h-40 flex flex-col p-4 `}`;
const EachCountry=styled.div`${tw` w-1/5 h-full object-cover m-4 shadow-lg`}`;
const Flags=styled.img`${tw` h-56 w-full object-cover `}`;
const Loading=styled.h1`${tw` text-center text-3xl h-screen mt-48 `}`;
//<---------------------card details-------------->
const Flag=styled.img`${tw` h-56 object-cover`}`;
const FlagTag=styled.div`${tw`flex justify-around w-2/4 `}`;
const CardDetails=styled.div`${tw`flex justify-around items-center m-4`}`;
const Details=styled.div`${tw` flex justify-around flex-col h-56 w-3/5 flex-wrap `}`;
const CityButton=styled.button`${tw` m-2 p-2 shadow-lg `}`;
const CityDetails=styled.div`${tw`flex flex-wrap m-4`}`;
const Borders=styled.div`${tw``}`;
const CountryName=styled.h1`${tw`text-xl`}`;
const BackButton=styled.button`${tw`p-2 m-2 shadow-lg flex items-center`}`;
const TopLevel=styled.div`${tw`mt-12 w-1/3 flex   flex-col flex-wrap`}`;
//<-------------------------country page--------------------->

const CountryPage = styled('div')`
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.background};
`;
const CountryCardBox = styled('div')`
  ${tw`h-screen`}
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.background};
`;

export{HeaderStyles,ThemeButton,SearchAndFilter,SearchTag,SelectTag,Country,EachCountry,Flags,SearchClass,
CountryAddress,Flag,FlagTag,CardDetails,Details,CityButton,CityDetails,CountryPage,Borders,
CountryName,BackButton,TopLevel,Loading,CountryCardBox};

