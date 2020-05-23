import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color, number } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import LoadingView from './LoadingView'

export default {
   component: LoadingView,
   title: 'Common/loadingView'
}

export const defaultView = () => <LoadingView />
export const withCustomColors = () => <LoadingView fill={'orange'} />

export const withCustomColorsKnobs = () => (
   <LoadingView
      width={number('width', '50px')}
      height={number('height', '50px')}
      fill={color('colorName', 'black')}
   />
)

withCustomColorsKnobs.story = {
   decorators: [withKnobs]
}
