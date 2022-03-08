import {FC} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';

type CardProps = {
  onClick: () => void;
  image: string;
};

export const CardCollectible: FC<CardProps> = ({onClick, image}) => {
  return (
    <StyledCard>
      <CardImage src={image} onClick={onClick} />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  aspect-ratio: 8 / 11;
  border-radius: 10px;
  width: 180px;
  height: 230px;
  cursor: pointer;

  @media screen and (min-width: ${ScreenSize.tablet}) {
    width: 200px;
    height: 250px;
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
