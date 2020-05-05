import styled from '@emotion/styled';
import tw from 'tailwind.macro';


const CheckoutButton=styled.button`${tw`text-white  bg-black m-2 text-xl p-2 text-gray-600 rounded`}
cursor:${props=>props.disabled===true? 'not-allowed':'pointer'}`;

export{CheckoutButton}