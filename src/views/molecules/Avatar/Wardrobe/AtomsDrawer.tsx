import { FC, useState } from 'react';
import { ScreenSize } from 'views/screenSize';
import styled from 'styled-components';
import { RoundIcon } from 'views/atoms/Icon/Icon';
import drawer_accessories from 'views/assets/drawers/drawer_accessories.png';
import drawer_hairs from 'views/assets/drawers/drawer_hairs.png';
import drawer_clothes from 'views/assets/drawers/drawer_clothes.png';
import drawer_pants from 'views/assets/drawers/drawer_pants.png';

interface AtomDrawerProps {
  onAtomClick: (atomId: number) => (void)
}
export const AtomsDrawer: FC<AtomDrawerProps> = ({onAtomClick}) => {

  const [atomIndex, setAtomIndex] = useState(0);

  const setCurrentAtomId = (val: any) => {
    if(val < 4){
      setAtomIndex(val);
      onAtomClick(val)
    }
  };

  return (
    <StyledAtomsDrawer>
      <AtomsRoundIcon
        onClick={() => setCurrentAtomId(0)}
        src={drawer_accessories}
        isSelected={atomIndex === 0 ? true : false}
      />
      <AtomsRoundIcon
        onClick={() => setCurrentAtomId(1)}
        src={drawer_hairs}
        isSelected={atomIndex === 1 ? true : false}
      />
      <AtomsRoundIcon
        onClick={() => setCurrentAtomId(2)}
        src={drawer_clothes}
        isSelected={atomIndex === 2 ? true : false}
      />
      <AtomsRoundIcon
        onClick={() => setCurrentAtomId(3)}
        src={drawer_pants}
        isSelected={atomIndex === 3 ? true : false}
      />
    </StyledAtomsDrawer>
  );
};

const StyledAtomsDrawer = styled.div`
  grid-template-rows: repeat(4, 1fr);
  display: grid;
  align-content: center;
  height: 480px;
  margin-right: 0;
`;


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
