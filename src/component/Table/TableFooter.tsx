// TableFooter.tsx
import React from 'react';
import styled, { css } from 'styled-components';

const StyledTableFooter = styled.tfoot<TableFooterProps>`
background-color: red;
${(props) => props.disabled && `
background-color: grey;
cursor: not-allowed;
color: #ccc;
`}
`;

interface TableFooterProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const TableFooter: React.FC<TableFooterProps> = ({ children, disabled = false }) => {
  return <StyledTableFooter disabled={disabled}>{children}</StyledTableFooter>;
};