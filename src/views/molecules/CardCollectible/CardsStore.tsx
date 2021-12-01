import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import {CardCollectibleStore} from './CardCollectibleStore';
import {get} from '../../../api/queries/get';
import {COLLECTIBLE_CATEGORY} from '../../../api/fragments/progressFragments';

export const CardsStore: FC = () => {
  const [collectiblesCategory, setCollectiblesCategory] = useState([]);
  const handleData = (data: any) => {
    console.log(data);
    setCollectiblesCategory(data.data.collectiblesCategory);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get('collectiblesCategory', COLLECTIBLE_CATEGORY, handleData, handleError);
  }, []);

  return (
    <>
      <CardsStoreStyle>
        {collectiblesCategory.map(() => (
          <CardCollectibleStore />
        ))}
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
