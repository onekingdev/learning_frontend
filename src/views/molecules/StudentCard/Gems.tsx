/**
 * @author BruceLee
 * Gems and owner collectible cards
 */

import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import {ScreenSize} from '../../screenSize';

import gem_legendary from '../../assets/gems_card_collectible/gem_legendary.png';
import gem_epic from '../../assets/gems_card_collectible/gem_epic.png';
import gem_common from '../../assets/gems_card_collectible/gem_common.png';
import gem_rare from '../../assets/gems_card_collectible/gem_rare.png';
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
