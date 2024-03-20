import React from "react";
import { Meta, Story } from "@storybook/react";
import { HeroImage } from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

export default {
  title: "Marbella/HeroImage",
  component: HeroImage,
  argTypes: {
    imageUrl: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<HeroImageProps> = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://via.placeholder.com/500",
  height: "300px",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
