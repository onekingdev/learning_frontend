import {FC} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import {CardCollectibleStore} from './CardCollectibleStore';

export const CardsStore: FC = () => {
  return (
    <>
      <CardsStoreStyle>
        <CardCollectibleStore />
        <CardCollectibleStore />
        <CardCollectibleStore />
        <CardCollectibleStore />
        <CardCollectibleStore />
        <CardCollectibleStore />
      </CardsStoreStyle>
    </>
  );
};

const CardsStoreStyle = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  @media screen and (max-width: ${ScreenSize.phone}) {
    margin-left: 35px;
    margin-right: 35px;
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: repeat(6, 200px);
    margin: auto;
  }
`;
