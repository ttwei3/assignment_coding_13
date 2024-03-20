// Marbella/RadioButton/RadioButton.tsx
import React from "react";
import styled from "styled-components";
import { RadioButtonProps, StyledRadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.input.attrs({
  type: "radio",
})<StyledRadioButtonProps>`
  margin: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  background-color: ${({ disabled }) =>
    disabled ? "#f2f2f2" : "transparent"}; // 禁用时的背景色

  &:checked + label {
    color: ${({ disabled, theme }) =>
      disabled ? theme.disabledText : theme.activeText};
  }
`;

const Label = styled.label<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  label,
  disabled = false,
}) => {
  return (
    <>
      <StyledRadioButton
        id={id}
        name={name}
        disabled={disabled}
        data-testid={id}
      />
      <Label htmlFor={id} disabled={disabled}>
        {label}
      </Label>
    </>
  );
};
