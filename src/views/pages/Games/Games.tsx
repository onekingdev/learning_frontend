import {FC} from 'react';
import {Title} from '../../atoms/Text/Title';
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
