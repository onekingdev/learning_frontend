import {FC} from 'react';
import styled from 'styled-components';
import {RoundIcon} from '../../atoms/Icon/Icon';
import {BasicColor} from '../../Color';
import {ScreenSize} from '../../screenSize';

export const AvatarAtoms: FC = () => {
  const atoms = [];
  for (let i = 0; i < 4; i++) {
    atoms.push({image: 'https://via.placeholder.com/75'});
  }

  return (
    <AtomsCloset>
      {atoms.map(atom => (
        <AtomsDrawer>
          <RoundIcon src={atom.image}></RoundIcon>
        </AtomsDrawer>
      ))}
    </AtomsCloset>
  );
};

const AtomsDrawer = styled.div`
  display: grid;
  background-color: ${BasicColor.brown};
  height: 85px;
  align-content: center;
  justify-content: center;
`;

const AtomsCloset = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 7px;
  height: 85px;
  align-content: center;
  justify-content: center;
  background-color: ${BasicColor.darkBrown};
  @media screen and (min-width: ${ScreenSize.phone}) {
    display: none;
  }
`;
