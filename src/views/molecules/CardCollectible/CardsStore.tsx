import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';
import {CardCollectibleStore} from './CardCollectibleStore';
import {get} from '../../../api/queries/get';
import { COLLECTIBLE_CATEGORY_QUERY } from '../../../api/queries/progress';
import { useDispatch, useSelector } from 'react-redux';
import * as TYPE from '../../../app/types';
import { Store } from '../../../app/configureStore';

export const CardsStore: FC = () => {
  const [collectiblesCategory, setCollectiblesCategory] = useState([]);
  const selector = useSelector((state: Store) => state)
  const dispatch = useDispatch();
  const handleData = (data: any) => {
    console.log(data);
    dispatch({type: TYPE.SET_COLLECTIBLE, payload: data.data.collectiblesCategory})
    setCollectiblesCategory(data.data.collectiblesCategory);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get(
      'collectiblesCategory',
      `${COLLECTIBLE_CATEGORY_QUERY}`,
      handleData,
      handleError
    );
  }, []);

  return (
    <>
      <CardsStoreStyle>
        {collectiblesCategory.map((item: {image: ''; id: ''}, i: number) => (
          <CardCollectibleStore
            key={i}
            image={`https://api.withsocrates.com/media/${item.image}`}
            id={item.id}
          />
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
