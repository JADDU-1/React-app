import React from 'react'
import { Button } from '@storybook/react/demo'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

export default { title: 'Button', decorators: [withKnobs] }

export const withText = () => <Button>Hello Button</Button>

export const withEmoji = () => (
   <Button onClick={action('click')}>
      <span role='img' aria-label='so cool'>
         😀 😎 👍 💯
      </span>
   </Button>
)
