// Marbella/Table.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table } from './Table';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableFooter } from './TableFooter';
import { TableProps } from './Table.types'; // 确保你有这个类型定义

export default {
  title: 'Marbella/Table',
  component: Table,
  subcomponents: { TableHeader, TableRow, TableCell, TableFooter },
  argTypes: {
    disabled: { control: 'boolean' }, // 控件允许在Storybook中切换disabled状态
  },
} as Meta;

const Template: Story<TableProps> = (args: React.JSX.IntrinsicAttributes & TableProps) => (
  <Table {...args}>
    <TableHeader disabled={args.disabled}>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell disabled={args.disabled}>Data 1</TableCell>
        <TableCell disabled={args.disabled}>Data 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell disabled={args.disabled}>Data 3</TableCell>
        <TableCell disabled={args.disabled}>Data 4</TableCell>
      </TableRow>
    </tbody>
    <TableFooter disabled={args.disabled}>
      <TableRow>
        <TableCell>Footer 1</TableCell>
        <TableCell>Footer 2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  children: null, // 你可以在这里传入具体的children，如果需要的话
  disabled: false, // 默认状态不禁用
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true, // 禁用状态
};
