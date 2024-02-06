import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHeroImage = styled.div<HeroImageProps>`
  background-image: url('${(props) => props.imageUrl}');
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height || '300px'};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  height,
  disabled = false,
  children,
}) => {
  return (
    <StyledHeroImage imageUrl={imageUrl} height={height} disabled={disabled} data-testid="hero-image">
      {children}
    </StyledHeroImage>
  );
};
