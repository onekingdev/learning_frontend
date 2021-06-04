import {FC} from 'react';
import {RibbonText} from '../../molecules/RibbonText';
import {MyProgress} from '../../organisms/MyProgress';
import {StudentMenu} from '../../templates/StudentMenu';
import avatar from '../../assets/avatars/girl-11.svg';
import {
  ProgressCharacter,
  ProgressBackground,
  ProgressStyle,
  ProgressTitle,
} from './Styles';
import {Rank} from '../../organisms/Rank';

export const Progress: FC = () => {
  return (
    <>
      <ProgressBackground>
        <StudentMenu>
          <ProgressTitle>
            <RibbonText body={'Progress'} />
          </ProgressTitle>
          <ProgressStyle>
            <MyProgress point={5} />
            <Rank />
            <ProgressCharacter src={avatar} />
          </ProgressStyle>
        </StudentMenu>
      </ProgressBackground>
    </>
  );
};
