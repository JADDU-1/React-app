import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { SignInButton } from '.'

export default { title: 'Buttons/signInButton', decorators: [withKnobs] }
export const defaultView = () => <SignInButton />

export const signInButtonLoadingView = () => (
   <SignInButton onClick={action('clicked')} loading={'true'}>
      Sign In
   </SignInButton>
)

export const withCustomColorsKnobs = () => (
   <SignInButton style={{ background: color('colorName', 'black') }} />
)

withCustomColorsKnobs.story = {
   decorators: [withKnobs]
}
