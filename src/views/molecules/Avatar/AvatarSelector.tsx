import {FC} from 'react';
import styled from 'styled-components';
import myAvatar from '../../assets/avatars/girl-11.svg';
import arrowLeft from '../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../assets/arrows/arrowRight.svg';
import favoriteEnabled from '../../assets/favorite_enabled.svg';

export const AvatarSelector: FC = () => {
  return (
    <>
      <SelectorGrid>
        <LeftArrow src={arrowLeft}></LeftArrow>
        <CurrentAvatar src={myAvatar}></CurrentAvatar>
        <RightArrow src={arrowRight}></RightArrow>
      </SelectorGrid>
      <FloatingIcon src={favoriteEnabled}></FloatingIcon>
    </>
  );
};

const SelectorGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;
  align-content: center;
  justify-content: center;
`;

const CurrentAvatar = styled.img`
  width: 200px;
  margin: auto;
`;

const LeftArrow = styled.img`
  width: 37px;
  margin: auto;
`;

const RightArrow = styled.img`
  width: 37px;
  margin: auto;
`;

const FloatingIcon = styled.img`
  width: 55px;
`;
