import { FC, useContext, useEffect }  from 'react';
import { RibbonText }                 from 'views/molecules/RibbonText';
import { MyProgress }                 from 'views/organisms/MyProgress';
import { StudentMenu }                from 'views/pages/Student/Menus/StudentMenu';
import avatar                         from 'views/assets/avatars/girl-11.svg';
import { dictionary }                 from './dictionary';
import {
  ProgressCharacter,
  ProgressBackground,
  ProgressStyle,
  ProgressTitle,
} from './Styles';
import { Rank }                       from '../../../organisms/Rank';
import { LoadingContext }             from 'react-router-loading';

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
