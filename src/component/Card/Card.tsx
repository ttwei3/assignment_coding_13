// Marbella/Card.tsx
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export interface CardProps {
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
}

export const Card: React.FC<CardProps> = ({ children, disabled = false, backgroundColor }) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledCard>
  );
};
