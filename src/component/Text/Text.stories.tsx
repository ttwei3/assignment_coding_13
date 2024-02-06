// Text.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Marbella/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' }, // 新增背景色控件
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    disabled: { control: 'boolean' },
  },
} as Meta;

// Template和导出的部分保持不变


const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is a text',
};

// 添加禁用状态示例
export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Text',
  disabled: true,
};
