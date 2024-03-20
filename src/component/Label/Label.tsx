// Label.tsx
import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  font-size: ${(props) =>
    props.size === "large" ? "18px" : props.size === "small" ? "12px" : "14px"};
  color: ${(props) => (props.disabled ? "black" : "blue")};
  background-color: ${(props) => (props.disabled ? "grey" : "orange")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  padding: 4px;
  margin: 0 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.size === "large"
        ? "16px"
        : props.size === "small"
          ? "10px"
          : "12px"};
  }
`;

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
