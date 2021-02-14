import * as React from 'react';

type Size = 'small' | 'default' | 'medium' | 'large';
type Color = 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger';

interface Props {
  label: string;
  onClick: () => void;
  color?: Color;
  size?: Size;
  isDisabled?: boolean;
  isInverted?: boolean;
}

function colorToClassName(color: Color): string {
  switch (color) {
    case 'primary':
      return 'is-primary';
    case 'link':
      return 'is-link';
    case 'info':
      return 'is-info';
    case 'success':
      return 'is-success';
    case 'warning':
      return 'is-warning';
    case 'danger':
      return 'is-danger';
    default:
      return '';
  }
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

const Button: React.FC<Props> = ({
  label,
  onClick,
  color = 'primary',
  size = 'default',
  isDisabled = false,
  isInverted = false,
}) => {
  let className = `button ${colorToClassName(color)} ${sizeToClassName(size)}`;
  if (isInverted) {
    className += ' is-inverted';
  }
  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
