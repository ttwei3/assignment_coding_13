// Label.test.tsx
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label Component", () => {
  // Test for component visibility
  test("component is visible", () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText("Test Label")).toBeVisible();
  });

  // Test for background color change when disabled
  test("background color changes when disabled", () => {
    render(<Label disabled>Disabled Label</Label>);
    const disabledLabel = screen.getByText("Disabled Label");
    // Assuming the disabled state sets the background color to grey as per StyledLabel
    expect(disabledLabel).toHaveStyle("background-color: grey");
  });
});
