// Marbella/Img/Img.tests.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders Img correctly', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
    expect(screen.getByAltText('Placeholder')).toBeInTheDocument();
  });

  test('Img component changes opacity when disabled', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Disabled Placeholder" disabled />);
    expect(screen.getByAltText('Disabled Placeholder')).toHaveStyle('opacity: 0.5');
  });
});
