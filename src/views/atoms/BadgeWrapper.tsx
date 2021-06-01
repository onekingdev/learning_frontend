import {FC} from 'react';
import styled from 'styled-components';

export const BadgeWrapper: FC = () => {
  return <Badge></Badge>;
};

const Badge = styled.div`
  border-radius: 50%;
  border: 3px dashed #3f3f3f;
  height: 100px;
  width: 100px;
  box-shadow: 2px 2px 5px 2px #c3c3c3;
`;
