// Text.types.ts
export interface TextProps {
  children?: React.ReactNode;
  color?: string;
  backgroundColor?: string; // 新增背景色属性
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  margin?: string;
  padding?: string;
  disabled?: boolean;
}
