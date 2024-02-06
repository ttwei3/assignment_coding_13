import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  test('renders Dropdown correctly', () => {
    render(<Dropdown options={[{ label: 'Test', value: 'test' }]} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('Dropdown component changes background color when disabled', () => {
    render(<Dropdown options={[{ label: 'Test', value: 'test' }]} disabled />);
    expect(screen.getByRole('combobox')).toHaveStyle(`background-color: grey`);
  });
});
