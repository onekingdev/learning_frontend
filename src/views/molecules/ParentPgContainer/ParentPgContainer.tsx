import { FC, ReactChildren, ReactChild } from 'react';
import { ParentPgNav } from 'views/molecules/ParentPgNav/ParentPgNav'
import colorpanel from 'views/assets/colorPannel.svg';
import mess from 'views/assets/mess.svg';
import planet from 'views/assets/planet.svg';
import noteBook from 'views/assets/note-book.svg';
import islandGreen from 'views/assets/island-green.svg';
import islandYellow from 'views/assets/island-yellow.svg';
import gateway from 'views/assets/gateway.svg';
import triangle from 'views/assets/triangle.svg';
import pencil from 'views/assets/pencil.svg'
import {
  Container,
  IslandGreen,
  IslandYellow,
  Planet,
  Mess,
  ColorPanel,
  Triangle,
  Pencil,
  GateWay,
  NoteBook,
} from './Style'
import { ParentPageTitle } from '../PageTitle';
import { Box } from '@mui/material';
import styled from 'styled-components';
import { ScreenSize } from 'constants/screenSize';

type ParentPgContainerProps = {
  onlyLogoImgNav: boolean;
  children: ReactChild | ReactChildren;
  title?: string
};

export const ParentPgContainer: FC<ParentPgContainerProps> = ({ onlyLogoImgNav, children = (<></>), title }) => {

  return (
    <Container>
      <IslandGreen src={islandGreen} />
      <IslandYellow src={islandYellow} />
      <Planet src={planet} />
      <Mess src={mess} />
      <ColorPanel src={colorpanel} />
      <Triangle src={triangle} />
      <Pencil src={pencil} />
      <GateWay src={gateway} />
      <NoteBook src={noteBook} />
      <ParentPgNav onlyLogoImg={onlyLogoImgNav} />
      {
        title &&
        <ParentPageTitle title={title} />
      }
      <Box mt={5} mb={5}>
        {children}
      </Box>
      <BottomFiller />
    </Container>
  );
};

export const BottomFiller = styled.div`
  height: 65px;
  width: 100%;
  @media screen and (min-width: ${ScreenSize.phone}) {
    display: none;
  }
`;
