import { FC } from 'react';
import { ScreenSize } from 'views/screenSize';
import styled from 'styled-components';
import { AvatarItemWithSkinTone } from 'views/molecules/Avatar/AvatarItemWithSkinTone';

interface AvatarProps {
  head: string
  body: string
  accessory: string
  pants: string
  skin?: string
}
export const AvatarSet: FC<AvatarProps> = ({
  head, body, accessory, pants, skin
}) => {

  return (
    <CurrentAvatar>
      <CurrentAccessory src={accessory} />
      <div className='header' >
        <AvatarItemWithSkinTone url={head} skinTone={skin} />
      </div>
      <div className='body' style={body ? {} : { display: 'none' }}>
        <AvatarItemWithSkinTone url={body} skinTone={skin} />
      </div>
      <div className='pants' style={pants ? {} : { display: 'none' }}>
        <AvatarItemWithSkinTone url={pants} skinTone={skin} />
      </div>
    </CurrentAvatar>
  );
};

const CurrentAvatar = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  position: relative;
  @media screen and (min-width: ${ScreenSize.phone}) {
  }

  .header {
    position: absolute;
    width: 160px;
    margin: auto;
    z-index: 2;
    top: -75px;
    @media screen and (min-width: ${ScreenSize.phone}) {
    }
  }

  .body {
    width: 235px;
    z-index: 1;
    top: 119px;
    position: absolute;
    @media screen and (min-width: ${ScreenSize.phone}) {
    }
  }

  .pants {
    position: absolute;
    bottom: 0;
    width: 160px;
    // left: 67px;
    @media screen and (min-width: ${ScreenSize.phone}) {
    }
  }
`;

const CurrentAccessory = styled.img`
  width: 160px;
  margin: auto;
  position: absolute;
  top: -75px;
  z-index: 3;
  @media screen and (min-width: ${ScreenSize.phone}) {
  }
`;
