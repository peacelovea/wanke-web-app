import React from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd/lib/input/Input';
import { WIDTH_SIZE_ENUM } from '@/components/ProFormGo/constants';

export interface InputGoProps extends InputProps {
  fixedWidth?: boolean;
}

const InputGo: React.FC<InputGoProps> = (props) => {
  const { fixedWidth = false, style, placeholder = '请输入', ...rawProps } = props;
  const _style = fixedWidth ? { width: WIDTH_SIZE_ENUM.s } : style;

  return <Input placeholder={placeholder} style={_style} {...rawProps} />;
};

export default InputGo;
