//Button.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (
  args: React.JSX.IntrinsicAttributes & ButtonProps,
) => <Button data-testId="InputField-id" {...args} />;
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (
  args: React.JSX.IntrinsicAttributes & ButtonProps,
) => <Button data-testId="InputField-id" {...args} />;
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (
  args: React.JSX.IntrinsicAttributes & ButtonProps,
) => <Button data-testId="InputField-id" {...args} />;
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (
  args: React.JSX.IntrinsicAttributes & ButtonProps,
) => <Button data-testId="InputField-id" {...args} />;
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  text: "Small",
};

export const Medium: Story = (
  args: React.JSX.IntrinsicAttributes & ButtonProps,
) => <Button data-testId="InputField-id" {...args} />;
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (
  args: React.JSX.IntrinsicAttributes & ButtonProps,
) => <Button data-testId="InputField-id" {...args} />;
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  text: "Large",
};
