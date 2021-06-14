import {FC} from 'react';
import {Title} from '../../atoms/Text/Title';
import {GameMenuButton} from '../../molecules/GameMenuButton';
import {MobileMenu} from '../../organisms/Menu/MobileMenu';
import {TopMenu} from '../../organisms/Menu/TopMenu';
import {GamesContainer, GamesTitle, Wrapper} from './Style';
import {GameMainMenu} from '../../organisms/GameMainMenu';
import {StudentMenu} from '../../templates/StudentMenu';
import {dictionary} from './dictionary';
export const Games: FC = () => {
  const language = 'en';
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <GamesContainer>
            <GamesTitle>
              <Title isDark={true}>{dictionary[language].title}</Title>
            </GamesTitle>
            <GameMainMenu />
          </GamesContainer>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
