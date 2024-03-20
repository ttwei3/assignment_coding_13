//Button.tsx
import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 35px 16px"};
  color: ${(props) => (props.primary ? "#47176e" : "#0b4e45")};
  background-color: ${(props) => (props.primary ? "#d4bae9" : "#7ed7cb")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  &:hover {
    background-color: ${(props) => (props.primary ? "#a481c1" : "#5bb3a7")};
  }
  &:active {
    border: solid 2px #5c5560;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
          ? "7px 28px 9px"
          : "12px 28px 14px"};
  }
  ${(props) =>
    props.disabled &&
    `
    && {
      background-color: pink;
      cursor: not-allowed;
      color: red;
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
