import {FC} from 'react';
import styled from 'styled-components';
import mythology from '../../assets/mythology.svg';
import {ScreenSize} from '../../screenSize';

export const CardCollectibleStore: FC = () => {
  return (
    <>
      <Card />
    </>
  );
};

const Card = styled.div`
  aspect-ratio: 8 / 11;
  border-radius: 10px;
  background-color: gray;
  width: 90%;
  max-height: 90%;
  background-image: url(${mythology});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 70%;
  }
`;
