// Label.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import Label from "./Label"; // 确保这个路径与你的文件结构匹配
import { LabelProps } from "./Label.types"; // 确保这个路径与你的文件结构匹配

export default {
  title: "Marbella/Label", // Storybook 中的显示路径
  component: Label,
  argTypes: {
    children: {
      name: "text",
      type: { name: "string", required: true },
      defaultValue: "Default Label",
      control: {
        type: "text",
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    color: {
      control: "color",
    },
    bold: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} as Meta<LabelProps>;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Label",
  color: "#000",
  size: "medium",
  bold: false,
  disabled: false,
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: "large",
  children: "Large Label",
};

export const SmallBold = Template.bind({});
SmallBold.args = {
  ...Default.args,
  size: "small",
  bold: true,
  children: "Small Bold Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  children: "Disabled Label",
};
