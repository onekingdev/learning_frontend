import styled from 'styled-components';
import {BasicColor} from '../../Color';
import titleBackground from '../../assets/title-games-background.png';
import {ScreenSize} from '../../screenSize';

type CardGameProps = {
  color: string;
};
export const GamesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const GamesStyle = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  margin-top: 20px;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 70%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0;
  }
`;

export const GamesTitle = styled.div`
  width: 50%;
  max-width: 300px;
  height: 50%;
  text-align: center;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background: url(${titleBackground}) center no-repeat;
  background-size: contain;
  margin-bottom: 20px;
`;

export const CardGame = styled.div<CardGameProps>`
  width: 65%;
  max-width: 350px;
  height: 70px;
  background-color: ${p => p.color};
  margin: 0 auto;
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    padding: 10px;
    margin: 20px;
  }
`;

export const CardGameImage = styled.img`
  widht: 70%;
  height: 40px;
`;
