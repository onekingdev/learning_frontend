import {FC} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';

type CardStoreProps = {
  image: string;
  id: string;
};
export const CardCollectibleStore: FC<CardStoreProps> = ({image, id}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/collectibles/category_${id}`);
  };

  return (
    <>
      <Card image={image} onClick={handleClick} />
    </>
  );
};

const Card = styled.div<{image: string}>`
  aspect-ratio: 8 / 11;
  border-radius: 10px;
  background-color: gray;
  width: 90%;
  max-height: 90%;
  background-image: url(${p => p.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  @media screen and (min-width: ${ScreenSize.desktop}) {
    width: 70%;
  }
`;
