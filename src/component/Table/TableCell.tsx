// Marbella/TableCell.tsx
import React from 'react';
import styled, { css } from 'styled-components';

const StyledTableCell = styled.td<{ disabled?: boolean }>`

  padding: 10px;
  ${(props) => props.disabled && `
  background-color: grey;
  cursor: not-allowed;
  color: #ccc;
`}
`;

interface TableCellProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const TableCell: React.FC<TableCellProps> = ({ children, disabled = false }) => {
  return <StyledTableCell disabled={disabled}>{children}</StyledTableCell>;
};
