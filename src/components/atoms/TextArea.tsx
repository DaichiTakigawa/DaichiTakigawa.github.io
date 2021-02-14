/* eslint-disable no-unused-vars */
import * as React from 'react';

type Size = 'small' | 'normal' | 'medium' | 'large';

interface Props {
  text: string;
  onChange(_: React.ChangeEvent<HTMLTextAreaElement>): void;
  placeholder?: string;
  rows?: number;
  size?: Size;
  disabled?: boolean;
}

function sizeToClassName(size: Size): string {
  switch (size) {
    case 'small':
      return 'is-small';
    case 'medium':
      return 'is-medium';
    case 'large':
      return 'is-large';
    default:
      return '';
  }
}

const TextArea: React.FC<Props> = ({
  text,
  onChange,
  placeholder,
  rows,
  size = 'normal',
  disabled,
}) => {
  const className = `textarea ${sizeToClassName(size)}`;
  return (
    <div className={'control'}>
      <textarea
        value={text}
        className={className}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
