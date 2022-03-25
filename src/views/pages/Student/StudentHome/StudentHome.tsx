import { FC, useContext, useEffect }
    from 'react';
import {
  Wrapper,
  CharacterContainer,
  MyProgressContainer,
  RankContainer,
  StudentHomeStyle,
}   from './Style';
import { MyProgress }
    from 'views/organisms/MyProgress';
import { HomeCharacter }
    from 'views/organisms/HomeCharacter';
import { StudentMenu }
    from 'views/pages/Student/Menus/StudentMenu';
import { Rank }
    from 'views/organisms/Rank';
import { LoadingContext }
    from 'react-router-loading';

export const StudentHome: FC = () => {
  const loadingContext = useContext(LoadingContext);
  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <StudentHomeStyle>
            <CharacterContainer>
              <RankContainer>
                <Rank />
              </RankContainer>
              <HomeCharacter userName={'Sophie'} />
              <MyProgressContainer>
                <MyProgress />
              </MyProgressContainer>
            </CharacterContainer>
          </StudentHomeStyle>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
