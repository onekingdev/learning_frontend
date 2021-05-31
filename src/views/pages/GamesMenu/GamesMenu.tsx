import {FC} from 'react';
import {GamesMenuContainer} from './Styles';
import {GameCardPresentation} from '../../molecules/GameCardPresentation';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';

export const GamesMenu: FC = () => {
  return (
    <>
      <GamesMenuContainer>
        <GameCardPresentation
          gameName={'PRINCESS GOLDBLADE'}
          gameImage={''}
          price={3}
        />
        <GameCardPresentation
          gameName={'PRINCESS GOLDBLADE'}
          gameImage={''}
          price={3}
        />
        <GameCardPresentation
          gameName={'PRINCESS GOLDBLADE'}
          gameImage={''}
          price={3}
        />
      </GamesMenuContainer>
      <MobileMenu />
    </>
  );
};
