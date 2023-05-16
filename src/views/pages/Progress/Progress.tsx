import {FC, useContext, useEffect} from 'react';
import {RibbonText} from '../../molecules/RibbonText';
import {MyProgress} from '../../organisms/MyProgress';
import {StudentMenu} from '../../templates/StudentMenu';
import avatar from '../../assets/avatars/girl-11.svg';
import {dictionary} from './dictionary';
import {
  ProgressCharacter,
  ProgressBackground,
  ProgressStyle,
  ProgressTitle,
} from './Styles';
import {Rank} from '../../organisms/Rank';
import {LoadingContext} from 'react-router-loading';

export const Progress: FC = () => {
  const loadingContext = useContext(LoadingContext);
  const language = 'en';
  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <>
      <ProgressBackground>
        <StudentMenu>
          <ProgressTitle>
            <RibbonText body={dictionary[language].title} />
          </ProgressTitle>
          <ProgressStyle>
            <MyProgress />
            <Rank />
            <ProgressCharacter src={avatar} />
          </ProgressStyle>
        </StudentMenu>
      </ProgressBackground>
    </>
  );
};
