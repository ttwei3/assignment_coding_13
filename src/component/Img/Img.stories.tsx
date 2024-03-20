// Marbella/Img/Img.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Img } from "./Img";
import { ImgProps } from "./Img.types";

export default {
  title: "Marbella/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
