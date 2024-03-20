// Text.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "./Text"; // 调整路径以匹配您的文件结构

describe("Text Component", () => {
  test("A test that checks that the component is visible", () => {
    render(<Text>Visible Text</Text>);
    expect(screen.getByText("Visible Text")).toBeVisible();
  });

  test("A test that checks that the background color changed when the component is in the ‘disabled’ state", () => {
    render(<Text disabled>Disabled Text</Text>);
    const disabledText = screen.getByText("Disabled Text");
    // 这里假设禁用状态下的背景色为 "grey"，根据实际情况调整
    expect(disabledText).toHaveStyle("background-color: grey");
  });
});
