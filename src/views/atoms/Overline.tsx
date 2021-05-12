import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';

type OverlineProps = {
  value: string;
  isBold?: boolean;
  isDark?: boolean;
};

export const Overline: FC<OverlineProps> = ({
  value,
  isBold = false,
  isDark = false,
}) => {
  return (
    <StyledBody isBold={isBold} isDark={isDark}>
      {value}
    </StyledBody>
  );
};

const StyledBody = styled.p<{isBold: boolean; isDark: boolean}>`
  font-weight: ${p => (p.isBold ? 500 : 300)};
  color: ${p => (p.isDark ? BasicColor.black : BasicColor.white)};
  font-family: Montserrat;
  font-size: 9px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
