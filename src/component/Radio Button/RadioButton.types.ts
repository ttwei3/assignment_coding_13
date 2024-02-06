// Marbella/RadioButton/RadioButton.types.ts
export interface RadioButtonProps {
  id?: string;
  name: string;
  label: string;
  disabled?: boolean;
}

// 可以为 StyledRadioButton 创建一个新的类型定义，如果需要的话
export interface StyledRadioButtonProps {
  id?: string;
  name: string;
  disabled?: boolean;
}
