import {FC} from 'react';
import styled from 'styled-components';
import {BasicColor} from '../Color';

type BodyProps = {
  value: string;
  isBold?: boolean;
  isDark?: boolean;
};

export const Body: FC<BodyProps> = ({
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
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.44px;
`;
