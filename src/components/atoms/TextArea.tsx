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
  errorMessage?: string;
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
  errorMessage,
}) => {
  let className = `textarea ${sizeToClassName(size)}`;
  if (errorMessage) {
    className = className + ' is-danger';
  }
  return (
    <div className={'field'}>
      <div className={'control'}>
        <textarea
          value={text}
          className={className}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          onChange={onChange}
        />
        {errorMessage ? (
          <p className={'help is-danger'}>{errorMessage}</p>
        ) : null}
      </div>
    </div>
  );
};

export default TextArea;
