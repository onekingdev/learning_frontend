import {FC} from 'react';
import styled from 'styled-components';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import {ScreenSize} from '../../screenSize';
import {CardCollectible} from './CardCollectible';

export const CardCollectibleCarrousel: FC = () => {
  return (
    <CardCarrousel>
      <LeftArrow src={arrowLeft}></LeftArrow>
      <CardCollectible></CardCollectible>
      <RightArrow src={arrowRight}></RightArrow>
    </CardCarrousel>
  );
};

const CardCarrousel = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 80px 1fr 80px;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    grid-template-columns: 80px 1fr 1fr 80px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    grid-template-columns: minmax(80px, auto) repeat(3, minmax(200px, 300px)) minmax(
        80px,
        auto
      );
  }
`;

const LeftArrow = styled.img`
  width: 25px;
  grid-row: 1 / 2;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 32px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 45px;
    margin-left: auto;
    margin-right: 20px;
  }
`;

const RightArrow = styled.img`
  width: 25px;
  grid-column: -2 / -1;
  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 32px;
  }
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 45px;
    margin-right: auto;
    margin-left: 20px;
`;
