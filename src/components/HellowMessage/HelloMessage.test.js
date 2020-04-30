import React, { Component } from 'react';
import {render} from '@testing-library/react'
import{HelloMessage} from './hello'
describe("HelloMessage tests",()=>{
    const {getByText,debug}=render(<HelloMessage message={"world"}/>=()=>{
        getByText(/World/i);
        debug();
    })
})