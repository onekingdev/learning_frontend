import {FC} from 'react';
import styled from 'styled-components';
import mythology from '../../assets/mythology.svg';

export const CardCollectible: FC = () => {
  return <StyledCard></StyledCard>;
};

const StyledCard = styled.div`
  aspect-ratio: 8 / 11;
  border-radius: 10px;
  background-color: gray;
  width: 90%;
  max-height: 90%;
  background-image: url(${mythology});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
