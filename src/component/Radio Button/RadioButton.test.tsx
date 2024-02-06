// Marbella/RadioButton/RadioButton.tests.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  // 测试组件是否可见
  test('renders RadioButton and is visible', () => {
    render(<RadioButton id="visible-test-radio" label="Test Radio Button" name="test" />);
    expect(screen.getByLabelText('Test Radio Button')).toBeVisible();
  });

  // 测试禁用状态下背景色是否改变
  test('checks that the background color changed when the component is in the ‘disabled’ state', () => {
    render(<RadioButton id="disabled-test-radio" name="test" label="Test Radio Button" disabled />);
    // 确保使用正确的 data-testid 值
    const radio = screen.getByTestId('disabled-test-radio');
    expect(radio).toHaveStyle('background-color: #f2f2f2');
  });
});

