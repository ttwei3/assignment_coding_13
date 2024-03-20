//Button.test.tsx
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component Tests", () => {
  test("Check Button Disabled", () => {
    render(<Button text="Button Marbella" disabled />);
    expect(
      screen.getByRole("button", { name: "Button Marbella" }),
    ).toBeDisabled();
  });

  test("Check Button is Visible", () => {
    render(<Button text="Visible Button" />);
    expect(
      screen.getByRole("button", { name: "Visible Button" }),
    ).toBeVisible();
  });

  test("Check Background Color Changes When Disabled", () => {
    render(<Button text="Disabled Button" disabled />);
    const disabledButton = screen.getByRole("button", {
      name: "Disabled Button",
    });
    expect(disabledButton).toHaveStyle("background-color: pink");
  });
});
