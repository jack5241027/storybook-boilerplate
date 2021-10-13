import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story, Meta } from "@storybook/react"

import Button, { ButtonProps } from './index'

const actions = {
  onClick: action("button-click"),
  onMouseMove: action("button-Move"),
}

export default {
  component: Button,
  title: 'Components/Button',
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...actions} {...args}>Button</Button>

export const Default = Template.bind({})

Default.args = {
  size: 'medium',
  variant: 'contained',
  color: 'primary',
}

export const CustomColorButton = Template.bind({})

CustomColorButton.args = {
  ...Default.args,
  color: 'secondary',
}
