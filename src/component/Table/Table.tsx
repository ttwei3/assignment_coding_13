import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  ${(props) =>
    props.disabled &&
    `
  background-color: darkgrey;
  cursor: not-allowed;
  color: #ccc;
`}
`;

export const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};
