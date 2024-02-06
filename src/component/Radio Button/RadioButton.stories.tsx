// Marbella/RadioButton/RadioButton.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RadioButton } from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Marbella/RadioButton',
  component: RadioButton,
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'default',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
