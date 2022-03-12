/**
 * @author BruceLee
 * Gems and owner collectible cards
 */

import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {ScreenSize} from 'constants/screenSize';

import gem_legendary from 'views/assets/gems_card_collectible/gem_legendary.png';
import gem_epic from 'views/assets/gems_card_collectible/gem_epic.png';
import gem_common from 'views/assets/gems_card_collectible/gem_common.png';
import gem_rare from 'views/assets/gems_card_collectible/gem_rare.png';
import gem_disabled from 'views/assets/gems_card_collectible/gem_disabled.png';

interface GemsProps {
  select: (gemCate: string) => (void)
  actives: Array<boolean>
}
export const Gems: FC<GemsProps> = ({select, actives}) => {

  const gems = [gem_legendary, gem_epic, gem_rare, gem_common]
  const gemTitles = ['LEGENDARY', 'EPIC', 'RARE', 'COMMON']

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
            <img src={actives[index] ? gem : gem_disabled} style={gemTitles[index] === selected ? {transform: 'translateY(-5px)'}: {}}/>
            <p>{gemTitles[index]}</p>
          </StyledGem>
        ))
      }
    </StyledGems>
  );
};

const StyledGems = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${ScreenSize.tablet}) {
    display: grid;
    width: 80vw;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
  }
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
    color: black;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  @media screen and (max-width: ${ScreenSize.tablet}) {
    width: 140px;

    img {
      width: 100%;
    }
  }
`;
