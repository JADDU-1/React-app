import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, color } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import NoDataView from '.'

export default {
   component: NoDataView,
   title: 'Common/noData'
}

export const defaultView = () => <NoDataView />
export const withCustomColors = () => (
   <NoDataView style={{ background: 'orange' }} />
)

export const withCustomColorsKnobs = () => (
   <NoDataView style={{ background: color('colorName', 'black') }} />
)

withCustomColorsKnobs.story = {
   decorators: [withKnobs]
}
