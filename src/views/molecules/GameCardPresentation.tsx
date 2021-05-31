import {FC} from 'react';
import styled from 'styled-components';

type GameCardProps = {
  gameName: string;
  gameImage: string;
  price: number;
};

export const GameCardPresentation: FC<GameCardProps> = ({
  gameName,
  gameImage,
  price,
}) => {
  return (
    <>
      <GameCardStyles>
        <GameCardTitle>{gameName}</GameCardTitle>{' '}
      </GameCardStyles>
    </>
  );
};

const GameCardStyles = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
`;

const GameCardTitle = styled.p`
  width: 100%;
  text-align: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 8px;
`;
