import { FC, useState } from 'react';
import { ScreenSize } from 'views/screenSize';
import styled from 'styled-components';
import { RoundIcon } from 'views/atoms/Icon/Icon';
import drawer_accessories from 'views/assets/drawers/drawer_accessories.png';
import drawer_head from 'views/assets/drawers/drawer-head.png';
import drawer_clothes from 'views/assets/drawers/drawer_clothes.png';
import drawer_pants from 'views/assets/drawers/drawer_pants.png';
import floor from 'views/assets/avatars/floor.png';

export const LeftDrawer: FC = () => {

  const [current, setCurrent] = useState(0)

  const setCurrentAtomId = (val: any) => {
    if (val < 4) {
      setCurrent(val)
    }
  };

  return (
    <DrawerContainer>
      <Drawer>
        <DrawerItem>
          <CenteredRoundIcon >
            <img src={drawer_accessories} />
          </CenteredRoundIcon>
        </DrawerItem>
        <DrawerItem>
          <CenteredRoundIcon >
            <img src={drawer_head} />
          </CenteredRoundIcon>
        </DrawerItem>
        <DrawerItem>
          <CenteredRoundIcon >
            <img src={drawer_clothes} />
          </CenteredRoundIcon>
        </DrawerItem>
        <DrawerItem>
          <CenteredRoundIcon >
            <img src={drawer_pants} />
          </CenteredRoundIcon>
        </DrawerItem>
      </Drawer>
      <Floor src={floor} />
    </DrawerContainer>
  );
};

const Floor = styled.img`
  margin-left: -10px;
  margin-right: -10px;
  width: calc( 100% + 20px);
  height: 15px;
`

const CenteredRoundIcon = styled.div`
  border-radius: 100%;
  background-color: #fff;
  width: 100px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transform: scale(0.8);
  }
`;

const DrawerItem = styled.div`
  background: #A66B44;
  display: flex;
  justify-content: center;
  width: 120px;
  @media screen and (max-width: ${ScreenSize.phone}) {
    width: calc((100vw - 50px ) / 4);
  }
`
const Drawer = styled.div`
  display: grid;
  padding: 10px 15px 10px 15px;
  grid-template-rows: repeat(4, 1fr);
  background: rgb(92,43,12);
  background: linear-gradient(90deg, rgba(92,43,12,1) 0%, rgba(205,112,53,1) 4%, rgba(92,43,12,1) 15%, rgba(92,43,12,1) 94%, rgba(174,93,42,1) 99%);
  row-gap: 10px;
  @media screen and (max-width: ${ScreenSize.phone}) {
  }
`
const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${ScreenSize.phone}) {
    display: none;
  }
`

const AtomsRoundIcon = styled(RoundIcon) <{
  isSelected: boolean;
}>`
  margin: auto;
  border: ${props => (props.isSelected ? 'solid 3px red' : 'none')};
  width: ${props => (props.isSelected ? '24px' : '30px')};
  height: ${props => (props.isSelected ? '24px' : '30px')};
  @media screen and (min-width: ${ScreenSize.phone}) {
    margin: auto;
    width: ${props => (props.isSelected ? '74px' : '80px')};
    height: ${props => (props.isSelected ? '74px' : '80px')};
    margin-left: calc(160px / 2 - 80px / 2);
    margin-right: calc(160px / 2 - 80px / 2);
  }
`;
