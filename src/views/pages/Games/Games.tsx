import { FC, useContext, useEffect } from 'react';
import { Title } from 'views/atoms/Text/Title';
import { GamesContainer, GamesTitle, Wrapper } from './Style';
import { GameMainMenu } from 'views/organisms/GameMainMenu';
import { StudentMenu } from 'views/templates/StudentMenu';
import { dictionary } from './dictionary';
import { LoadingContext } from 'react-router-loading';
export const Games: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const language = 'en';
  useEffect(() => {
    loadingContext.done();
  }, []);
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
