import {FC} from 'react';
import styled from 'styled-components';

type BadgeProps = {
  badge?: string;
};

export const BadgeWrapper: FC<BadgeProps> = ({badge}) => {
  return <Badge></Badge>;
};

const Badge = styled.img`
  border-radius: 50%;
  border: 3px dashed #3f3f3f;
  height: 70px;
  width: 70px;
  box-shadow: 2px 2px 5px 2px #c3c3c3;
`;
