import { FC, useEffect, useState } from 'react';
import styled          from 'styled-components';
import { ScreenSize }  from 'constants/screenSize';
import { ImageAvatar } from '../DefaultAvatar';

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

  // const isMobile = window.innerWidth > SCREEN_MOBILE ? false : true
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
            <ImageAvatar
              name='S'
              accessory={favorite.avatarAccessorie}
              head={favorite.avatarHead}
              clothes={favorite.avatarClothes}
              size={80}
            />
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
  height: 100px;
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    height: auto;
  }
`
const CenteredRoundIcon = styled.div`
  overflow: hidden;
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

