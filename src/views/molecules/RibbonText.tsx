import {FC} from 'react';
import styled from 'styled-components';
import {Typography} from '../atoms/Text/typography';
import {BasicColor} from '../Color';

type RibbonProps = {
  body: string;
};

export const RibbonText: FC<RibbonProps> = ({body}) => {
  return (
    <Wrapper>
      <RibbonHead></RibbonHead>
      <Ribbon>{body}</Ribbon>
      <RibbonTail></RibbonTail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 6rem;
  width: 300px;
  display: grid;
  grid-template-columns: 30px auto 30px;
`;

const Ribbon = styled.div`
  background-color: #f4c222;
  text-align: center;
  padding-top: 6px;
  font-family: ${Typography.secondary};
  color: ${BasicColor.white};
`;
const RibbonHead = styled.div`
  height: 0;
  border-style: solid;
  border-width: 16px;
  border-color: #f4c222 #f4c222 #f4c222 transparent;
`;
const RibbonTail = styled.div`
  height: 0;
  border-style: solid;
  border-width: 16px;
  border-color: #f4c222 transparent #f4c222 #f4c222;
`;
