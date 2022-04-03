import { FC } from 'react';
import { ScreenSize } from 'constants/screenSize';
import styled from 'styled-components';
import { AvatarItemWithSkinTone } from 'views/molecules/Avatar/AvatarItemWithSkinTone';

interface AvatarProps {
  head: string
  body: string
  accessory: string
  pants: string
  skin?: string
}

const AVATAR_SET_SIZE = 150
export const AvatarSet: FC<AvatarProps> = ({
  head, body, accessory, pants, skin
}) => {

  return (
    <CurrentAvatar style={{ height: AVATAR_SET_SIZE * 2.6, width: AVATAR_SET_SIZE*1.5 }}>
      <img src={accessory} style={{
        width: AVATAR_SET_SIZE,
        top: -AVATAR_SET_SIZE / 3,
        position: 'absolute',
        zIndex: 30
      }} />
      <div style={{
        width: AVATAR_SET_SIZE,
        top: -AVATAR_SET_SIZE / 4,
        position: 'absolute',
        zIndex: 25
      }}>
        <AvatarItemWithSkinTone url={head} skinTone={skin} />
      </div>
      <div style={
        body ? {
          width: AVATAR_SET_SIZE * 1.5,
          position: 'absolute',
          zIndex: 20
        }
          :
          { display: 'none' }}>
        <AvatarItemWithSkinTone url={body} skinTone={skin} />
      </div>
      <div style={
        pants ? {
          width: AVATAR_SET_SIZE,
          bottom: 0,
          position: 'absolute',
          zIndex: 15
        }
          :
          { display: 'none' }}>
        <AvatarItemWithSkinTone url={pants} skinTone={skin} />
      </div>
    </CurrentAvatar>
  );
};

const CurrentAvatar = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 300px;
  @media (min-width:${ScreenSize.tablet}) and (max-width:${ScreenSize.desktop}) {
    width: 250px;
  }
  position: relative;
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 65vw;
  }

`;
