import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ScreenSize } from 'views/screenSize';
// import placeHolder from 'views/assets/placeholder.png';
import { AvatarItemWithSkinTone } from '../AvatarItemWithSkinTone';

interface FavoritProps {
  select: (id: number) => (void)
  favorites: Array<any>
}

export const AvatarFavorites: FC<FavoritProps> = ({ select, favorites }) => {

  const [current, setCurrent] = useState(0)
  const handleAvatarClick = (i: number) => {
    select(i)
    setCurrent(i)
  }
  useEffect(() => {
  }, [favorites])
  return (
    <FavoritesContainer>
      {favorites.map((favorite, i) => (
        <CenteredRoundIcon onClick={() => handleAvatarClick(i)} key={favorite.id} style={i === current ?{background: '#ffff00c2'}:{}}>
          <CurrentAccessory src={favorite.avatarAccessorie?.image} />
          <div className='head'>
            <AvatarItemWithSkinTone url={favorite.avatarHead.image} skinTone={favorite.skinTone ? favorite.skinTone : ''} />
          </div>
        </CenteredRoundIcon>
      ))}
    </FavoritesContainer>
  );
};
const CenteredRoundIcon = styled.div`
  .head {
    position: absolute;
    width: 80px;
    margin: auto;
    z-index: 2;
    inset: 0;
    margin-top: -30px;
    @media screen and (min-width: ${ScreenSize.phone}) {
    }
  }
  border-radius: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #fff;
  width: 100px;
  height: 100px;
`;

const FavoritesContainer = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  place-items: center;
  margin-bottom: 5px;
  @media screen and (max-width: ${ScreenSize.phone}) {

  }
`;

const CurrentAccessory = styled.img`
  width: 80px;
  margin: -30px;
  position: absolute;
  top: 0;
  z-index: 3;
  @media screen and (min-width: ${ScreenSize.phone}) {
  }
`;
