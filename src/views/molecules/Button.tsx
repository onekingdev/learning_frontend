import { FC } from 'react';
import { ButtonColor } from 'views/Color';
import { Button as ButtonText } from 'views/atoms/Text/Button';
import { ButtonWrapper } from 'views/atoms/ButtonWrapper';

type ButtonProps = {
  value: string;
  color?: ButtonColor;
  darkText?: boolean;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  value,
  color,
  darkText = false,
  onClick,
}) => {
  return (
    <ButtonWrapper bgColor={color} onClick={onClick}>
      <ButtonText isDark={darkText}>{value}</ButtonText>
    </ButtonWrapper>
  );
};
