// TableHeader.tsx
import React from 'react';
import styled, { css } from 'styled-components';

const StyledTableHeader = styled.thead<{ disabled?: boolean }>`
background-color: pink;
${(props) => props.disabled && `
background-color: grey;
cursor: not-allowed;
color: #ccc;
`}
`;

interface TableHeaderProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled = false }) => {
  return <StyledTableHeader disabled={disabled}>{children}</StyledTableHeader>;
};


