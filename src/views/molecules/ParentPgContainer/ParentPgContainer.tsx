import {FC, useEffect, ReactChildren, ReactChild} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {ParentPgNav} from '../ParentPgNav/ParentPgNav'
import * as TYPES from '../../../app/types'
import colorpanel from '../../assets/colorPannel.svg';
import mess from '../../assets/mess.svg';
import homePc from '../../assets/home_pc.svg';
import planet from '../../assets/planet.svg';
import noteBook from '../../assets/note-book.svg';
import islandGreen from '../../assets/island-green.svg';
import islandYellow from '../../assets/island-yellow.svg';
import gateway from '../../assets/gateway.svg';
import triangle from '../../assets/triangle.svg';
import pencil from '../../assets/pencil.svg'

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
  Center } from './Style'
type ParentPgContainerProps = {
  onlyLogoImgNav: boolean;
  children: ReactChild | ReactChildren;
};
export const ParentPgContainer: FC<ParentPgContainerProps> = ({onlyLogoImgNav, children=(<></>)}) => {
  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
  }, []);
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
      <ParentPgNav onlyLogoImg={onlyLogoImgNav}/>
      <Center>{children}</Center>
    </Container>
  );
};
