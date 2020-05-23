import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color } from '@storybook/addon-knobs'
import Checkout from '.'

export default { title: 'Buttons/checkout', decorators: [withKnobs] }
export const defaultView = () => <Checkout />

export const checkoutButtonView = () => <Checkout total={1} />

export const withCustomColorsKnobs = () => (
   <Checkout style={{ background: color('Color', 'black') }} />
)

withCustomColorsKnobs.story = {
   decorators: [withKnobs]
}
