import {FC} from 'react';
import styled from 'styled-components';

export const Collectible: FC = () => {
  return <CollectibleCard></CollectibleCard>;
};

const CollectibleCard = styled.div`
  width: 200px;
  height: 270px;
`;
