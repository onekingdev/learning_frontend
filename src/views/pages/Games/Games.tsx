import {FC} from 'react';
import {Title} from '../../atoms/Text/Title';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import {GamesMenu} from '../../organisms/GamesMenu';
import {GamesContainer, GamesTitle} from './Style';

export const Games: FC = () => {
  return (
    <>
      <TopMenu
        rank={10}
        level={190}
        exp={100}
        expMax={200}
        icon={''}
        userName={'Elliot Alderson'}
        progress={50}
        energyCharge={1}
        balance={1999}
      />
      <GamesContainer>
        <GamesTitle>
          <Title isDark={true}>Games</Title>
        </GamesTitle>
        <GamesMenu />
      </GamesContainer>
      <MobileMenu />
    </>
  );
};
