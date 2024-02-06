// Label.types.ts
export interface LabelProps {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bold?: boolean;
  disabled?: boolean; // 新增
}
