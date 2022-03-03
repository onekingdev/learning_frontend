import { FC, useContext, useEffect, useState } from 'react';
import { ScreenSize } from 'views/screenSize';
import styled from 'styled-components';
import { AvatarWithSkinTone } from 'views/molecules/Avatar/AvatarWithSkinTone';

interface AvatarProps {
  head: string
  body: string
  accessory: string
  pants: string
  skin?: number
}
export const AvatarSet: FC<AvatarProps> = ({
  head, body, accessory, pants, skin
}) => {

  return (
    <CurrentAvatar>
      <CurrentAccessory src={accessory} />
      <div className='header' >
        <AvatarWithSkinTone url={head} skinTone={skin} />
      </div>
      <div className='body' style={body ? {} : { display: 'none' }}>
        <AvatarWithSkinTone url={body} skinTone={skin} />
      </div>
      <div className='pants' style={pants ? {} : { display: 'none' }}>
        <AvatarWithSkinTone url={pants} skinTone={skin} />
      </div>
    </CurrentAvatar>
  );
};

const CurrentAvatar = styled.div`
  width: 200px;
  display: grid;
  position: relative;
  grid-template-columns: auto;
  grid-template-rows: 138px 100px 130px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
    width: 200px;
    align-self: end;
  }

  .header {
    position: relative;
    width: 160px;
    margin: auto;
    z-index: 2;
    top: -50px;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    @media screen and (min-width: ${ScreenSize.phone}) {
      width: 160px;
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  }

  .accessory {
    width: 160px;
    margin: auto;
    position: relative;
    top: -55px;
    z-index: 3;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    @media screen and (min-width: ${ScreenSize.phone}) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  }

  .body {
    height: 105px;
    margin: auto;
    z-index: 1;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    @media screen and (min-width: ${ScreenSize.phone}) {
      height: 105px;
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
  }

  .pants {
    height: 140px;
    width: 137px;
    margin: auto;
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    @media screen and (min-width: ${ScreenSize.phone}) {
      height: 140px;
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    }
  }
`;

const CurrentAccessory = styled.img`
  width: 160px;
  margin: auto;
  position: relative;
  top: -55px;
  z-index: 999;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
`;
