import React from "react";
import { Story, Meta } from "@storybook/react";
import { Card } from "./Card"; // 请确保这里的路径根据您的项目结构进行相应调整
import { CardProps } from "./Card.types"; // 同样，确保路径正确

// 默认导出，定义故事的元数据
export default {
  title: "Marbella/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" }, // 允许在Storybook控件面板中调整背景色
    disabled: { control: "boolean" }, // 允许在Storybook控件面板中切换禁用状态
  },
} as Meta<CardProps>;

// Template函数用于生成故事
const Template: Story<CardProps> = (args) => <Card {...args} />;

// 默认状态的Card故事
export const Default = Template.bind({});
Default.args = {
  children: "This is a card", // Card组件内的内容
  backgroundColor: "#FFFFFF", // 默认背景色
  disabled: false, // 默认不禁用
};

// 禁用状态的Card故事
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args, // 继承Default故事的参数
  children: "This card is disabled", // 修改内容以反映禁用状态
  disabled: true, // 设置为禁用状态
};
