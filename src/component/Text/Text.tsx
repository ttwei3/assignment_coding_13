// Text.tsx
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { css } from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.disabled ? "#FFFFFF" : props.color || "#0b4e45")};
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "#7ed7cb"};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "12px";
      case "medium":
        return "16px";
      case "large":
        return "20px";
      default:
        return "16px";
    }
  }};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  @media (max-width: 768px) {
    font-size: ${(props) => {
      switch (props.size) {
        case "large":
          return "18px"; // 在较小屏幕上调整大号文本大小
        default:
          return props.size === "medium" ? "14px" : "10px"; // 调整中等和小号文本大小
      }
    }};
  }
`;

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
