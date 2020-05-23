import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color } from '@storybook/addon-knobs'
import EachSize from './index'

export default { title: 'Buttons/sizeButton', decorators: [withKnobs] }
export const defaultView = () => <EachSize size={'XL'} />

export const sizeButtonView = () => (
   <EachSize size={'XL'} onClick={action('click')} />
)

export const withCustomColorsKnobs = () => (
   <EachSize
      style={{ background: color('Color', 'grey') }}
      size={'XL'}
      onClick={action('click')}
   />
)

withCustomColorsKnobs.story = {
   decorators: [withKnobs]
}
