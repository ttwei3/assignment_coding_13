import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Marbella/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
