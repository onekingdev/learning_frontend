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
  const [placeholders, setPlaceHolders] = useState<Array<string>>([])
  useEffect(() => {
    // in case there are less than 4 favorite avatars for current user.
    setPlaceHolders(Array(4 - favorites.length).fill(''))
  }, [favorites])
  return (
    <>
      {favorites.map((favorite, i) => (
        <Drawer key={favorite.id}>
          <CenteredRoundIcon onClick={() => handleAvatarClick(i)} key={favorite.id} style={i === current ? { background: '#ffff00c2' } : {}}>
            {favorite.avatarAccessorie &&<CurrentAccessory src={favorite.avatarAccessorie?.image} />}
            <div className='head'>
              <AvatarItemWithSkinTone url={favorite.avatarHead.image} skinTone={favorite.skinTone ? favorite.skinTone : ''} />
            </div>
          </CenteredRoundIcon>
        </Drawer>
      ))}
      {
        placeholders.map((_,id) => (
        <Drawer key={id} />
        ))
      }
    </>
  );
};

const Drawer = styled.div`
  background: #A66B44;
  width: 120px;
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
  }
`
const CenteredRoundIcon = styled.div`
  .head {
    position: absolute;
    width: 80px;
    margin: auto;
    z-index: 2;
    inset: 0;
    top: -30px;

    @media screen and (max-width: ${ScreenSize.phone}) {
      width: auto;
    }
  }
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    height: 100%;
  }

  margin-left: auto;
  margin-right: auto;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #fff;
  width: 100px;
  height: 100px;
`;

const CurrentAccessory = styled.img`
  width: 80px;
  position: absolute;
  top: -27px;
  z-index: 3;
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 70px;
  }
`;
