import {FC} from 'react';
import {Title} from '../../atoms/Text/Title';
import {GameMenuButton} from '../../molecules/GameMenuButton';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import {GamesContainer, GamesTitle} from './Style';
import {GameMainMenu} from '../../organisms/GameMainMenu';
import {StudentMenu} from '../../templates/StudentMenu';

export const Games: FC = () => {
  return (
    <>
      <StudentMenu>
        <GamesContainer>
          <GamesTitle>
            <Title isDark={true}>Games</Title>
          </GamesTitle>
          <GameMainMenu />
        </GamesContainer>
      </StudentMenu>
    </>
  );
};
