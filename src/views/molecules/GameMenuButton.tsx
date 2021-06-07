import {FC} from 'react';
import styled from 'styled-components';
import {Title} from '../atoms/Text/Title';
import {ScreenSize} from '../screenSize';

type GameButtonProps = {
  gameMode: string;
  gameModeImage: string;
  color: string;
  onClick: () => void;
};

export const GameMenuButton: FC<GameButtonProps> = ({
  gameMode,
  gameModeImage,
  color,
  onClick,
}) => {
  return (
    <>
      <CardGame color={color} onClick={onClick}>
        <Title>{gameMode}</Title>
        <CardGameImage src={gameModeImage} />
      </CardGame>
    </>
  );
};

type CardGameProps = {
  color: string;
};

const CardGame = styled.div<CardGameProps>`
  width: 65%;
  max-width: 350px;
  height: 70px;
  background-color: ${p => p.color};
  margin: 0 auto;
  border-radius: 9px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: ${ScreenSize.tablet}) {
    padding: 10px;
    margin: 20px;
  }
`;

const CardGameImage = styled.img`
  widht: 70%;
  height: 40px;
`;
