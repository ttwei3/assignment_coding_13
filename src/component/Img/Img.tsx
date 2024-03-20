// Marbella/Img/Img.tsx
import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Img: React.FC<ImgProps> = ({ src, alt, disabled, style }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} style={style} />;
};
