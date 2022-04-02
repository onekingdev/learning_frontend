import { FC, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { AvatarItemWithSkinTone } from 'views/molecules/Avatar/AvatarItemWithSkinTone';
import styled from 'styled-components';
import { deepPurple } from '@mui/material/colors';
import { ScreenSize } from 'constants/screenSize';

interface AvatarProps {
    clothes?: any,
    accessory?: any,
    head?: any,
    skinTone?: string,
    firstName: string,
    lastName: string,
    size: number
}

export const ImageAvatar: FC<AvatarProps> = ({ clothes, accessory, head, skinTone, firstName, lastName, size }) => {
    // useEffect(() => {
    //     console.log(head)
    // })
    return (
        head ?
            <div style={{width: size, height: size, zIndex: 30, position: 'relative', display:'flex'}}>
                {clothes && <CurrentClothes src={clothes.image} style={{width: size, marginTop: size*2/3}}/>}
                <div style={{width: size, height: size, position: 'absolute', marginTop: -size/2, zIndex: 2}}>
                    <AvatarItemWithSkinTone url={head.image} skinTone={skinTone ? skinTone : ''} />
                </div>
                {accessory && <CurrentAccessory src={accessory.image} style={{width: size, marginTop: -size/2}}/>}
            </div>
            :
            <Avatar sx={{ bgcolor: deepPurple[500], width: size, height: size , zIndex:30}}>{firstName.charAt(0).toUpperCase()}{lastName.charAt(0).toUpperCase()}</Avatar>
    )
}

const CurrentAccessory = styled.img`
  position: absolute;
  z-index: 4;
  @media screen and (max-width: ${ScreenSize.phone}) {
  }
`;

const CurrentClothes = styled.img`
  position: absolute;
  z-index: 1;
  @media screen and (max-width: ${ScreenSize.phone}) {
  }
`;
