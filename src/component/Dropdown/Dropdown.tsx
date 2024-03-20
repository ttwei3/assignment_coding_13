import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledDropdown = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  margin: 10px;
  background-color: ${(props) => (props.disabled ? "grey" : "pink")};
  color: ${(props) => (props.disabled ? "white" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
}) => {
  return (
    <StyledDropdown disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledDropdown>
  );
};
