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
import avatar from '../../assets/packageIcons/avatar.svg'
import {
  Container,
  Header,
  Avatar,
 } from './Style'
type PackagePanelProps = {
  type: string;
  plan: string;
  price: number;
};
export const PackagePanel: FC<PackagePanelProps> = ({type, plan, price}) => {
  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
  }, []);
  return (
    <Container>
      <Header color={type}>
        <Avatar src={avatar} />
      </Header>
    </Container>
  );
};
