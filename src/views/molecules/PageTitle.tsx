import { FC } from 'react';
import styled from 'styled-components';
import ribbon from 'views/assets/ribbon.svg';
import { ScreenSize } from 'constants/screenSize';
import { TypoHeader } from 'views/atoms/Text';
import dark_green_ribbon_sharp from 'views/assets/others/dark_green_ribbon_sharp.svg'
import blue_ribbon from 'views/assets/title-kids-background.png';
import { BasicColor } from 'views/Color';
import { ImageAvatar } from './Avatar/DefaultAvatar';
import { Box } from '@mui/material';
import { useSocratesMediaQuery } from 'hooks/useSocratesMediaQuery';

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <CardTitle>
      <TypoHeader style={{ margin: 0 }}>{title}</TypoHeader>
    </CardTitle>
  );
};
export const ParentPageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <ParentTitleContainer>
      <TypoHeader style={{ color: 'white', width: '100%', textAlign:'center' }}>{title}</TypoHeader>
    </ParentTitleContainer>
  );
};
export const TeacherPageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <TeacherTitleContainer>
      <TypoHeader style={{ margin: 0, color: 'white' }}>{title}</TypoHeader>
    </TeacherTitleContainer>
  );
};



interface AvatarTitleProps {
  fullName: string
  currentAvatarAccessories: any
  currentAvatarHead: any
  currentAvatarClothes: any
}
export const AvatarTitle: FC<AvatarTitleProps> = ({
  fullName,
  currentAvatarAccessories,
  currentAvatarClothes,
  currentAvatarHead
}) => {

  const isMobile = useSocratesMediaQuery('xs')
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent={'center'}
    >
      {
        <ImageAvatar
          name={fullName || 'F'}
          accessory={currentAvatarAccessories}
          head={currentAvatarHead}
          clothes={currentAvatarClothes}
          size={150}
        />
      }
      <Box ml={-5} width={isMobile ? '100%' : 'auto'}>
        <ParentPageTitle title={fullName} />
      </Box>
    </Box>
  )
}

const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 25px 50px;
  margin: 50px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    margin: 0;
    padding: 10px 0 10px 0;
    background-image: none;
    background-color: orange;
  }
`;

const TeacherTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${dark_green_ribbon_sharp});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 15px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    margin: 0;
    padding: 20px 0;
    background-image: none;
    background-color: ${BasicColor.darkGreen};
  }
`;

const ParentTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${blue_ribbon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 15px 50px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: ${ScreenSize.phone}) {
    width: 100%;
    margin: 0;
    padding: 20px 0;
    background-image: none;
    background-color: ${BasicColor.blue};
  }
`;
