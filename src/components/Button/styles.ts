import styled from 'styled-components';

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'danger';
  $size: 'default' | 'icon';
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => ($size === 'icon' ? '36px' : 'auto')};
  height: ${({ $size }) => ($size === 'icon' ? '36px' : 'auto')};
  padding: ${({ $size }) =>
    $size === 'icon' ? 0 : '10px 16px'};
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  border: ${({ $variant, theme }) => {
  switch ($variant) {
    case 'primary':
      return `1px solid ${theme.colors.accent[500]}`;
    case 'danger':
      return '1px solid #dc2626';
    default:
      return `1px solid ${theme.colors.border.default}`;
  }
}};

  background-color: ${({ $variant, theme }) => {
  switch ($variant) {
    case 'primary':
      return theme.colors.accent[500];
    case 'danger':
      return '#dc2626';
    default:
      return theme.colors.background.card;
  }
}};

  color: ${({ $variant, theme }) =>
  $variant === 'primary' || $variant === 'danger'
    ? theme.colors.text.inverse
    : theme.colors.text.primary};

  &:not(:disabled):hover {
  background-color: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return theme.colors.accent[600];
      case 'danger':
        return '#b91c1c';
      default:
        return theme.colors.primary[50];
    }
  }};

  border-color: ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return theme.colors.accent[600];
      case 'danger':
        return '#b91c1c';
      default:
        return theme.colors.border.strong;
    }
  }};
}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.border.strong};
    outline-offset: 2px;
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.border.light};
    background-color: ${({ theme }) => theme.colors.background.page};
    color: ${({ theme }) => theme.colors.text.muted};
    cursor: not-allowed;
    opacity: 1;
  }
`;
