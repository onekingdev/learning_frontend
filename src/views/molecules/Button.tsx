import {FC} from 'react';
import {ButtonColor} from '../Color';
import {Button as ButtonText} from '../atoms/Text/Button';
import {ButtonWrapper} from '../atoms/ButtonWrapper';

type ButtonProps = {
  value: string;
  color?: ButtonColor;
  darkText?: boolean;
};

export const Button: FC<ButtonProps> = ({value, color, darkText = false}) => {
  return (
    <ButtonWrapper bgColor={color}>
      <ButtonText isDark={darkText}>{value}</ButtonText>
    </ButtonWrapper>
  );
};
