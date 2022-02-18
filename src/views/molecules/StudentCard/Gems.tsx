/**
 * @author BruceLee
 * Gems and owner collectible cards
 */

import {FC, useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';

import gem_legendary from '../../assets/gems_card_collectible/gem_legendary.svg';
import gem_epic from '../../assets/gems_card_collectible/gem_epic.svg';
import gem_common from '../../assets/gems_card_collectible/gem_common.svg';
import gem_rare from '../../assets/gems_card_collectible/gem_rare.svg';
import gem_disabled from '../../assets/gems_card_collectible/gem_disabled.png';

interface GemsProps {
  select: (gemCate: string) => (void)
}
export const Gems: FC<GemsProps> = ({select}) => {

  const gems = [gem_legendary, gem_epic, gem_rare, gem_common]
  const gemTitles = ['Legendary', 'Epic', 'Rare', 'Common']

  // state to make gem color gray when not selected
  const [selected, setSelected] = useState('')

  const onGemClick = (id: number) => {
    setSelected(gemTitles[id])
    select(gemTitles[id])
  }

  useEffect(() => {}, []);

  return (
    <StyledGems>
      {
        gems.map((gem, index) => (
          <StyledGem onClick={() => onGemClick(index)} key={index}>
            <img src={gemTitles[index] === selected ? gem : gem_disabled} />
            <p>{gemTitles[index]}</p>
          </StyledGem>
        ))
      }
    </StyledGems>
  );
};

const StyledGems = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

const StyledGem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  p {
    font-family: Montserrat;
    margin: 0;
    position: absolute;
    top: 45%;
    color: white;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;
