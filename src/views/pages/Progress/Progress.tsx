import {FC} from 'react';
import {RibbonText} from '../../molecules/RibbonText';
import {MyProgress} from '../../organisms/MyProgress';
import {StudentMenu} from '../../templates/StudentMenu';
import {ProgressBackground, ProgressStyle, ProgressTitle} from './Styles';
import {Rank} from '../../organisms/Rank';

export const Progress: FC = () => {
  return (
    <>
      <ProgressBackground>
        <StudentMenu>
          <ProgressStyle>
            <ProgressTitle>
              <RibbonText body={'Progress'} />
            </ProgressTitle>
            <MyProgress point={5} />
            <Rank />
          </ProgressStyle>
        </StudentMenu>
      </ProgressBackground>
    </>
  );
};
