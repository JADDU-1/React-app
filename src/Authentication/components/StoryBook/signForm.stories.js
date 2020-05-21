import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { Button, Input } from '../SignInPage/styles'
export default { title: 'Button', decorators: [withKnobs] }

export const signInButton = () => (
   <Button onClick={action('click')}>Sign In</Button>
)
export const inputText = () => (
   <Input onClick={action('click')} placeholder='Text'></Input>
)
