import {FC} from 'react';
import {BadgeWrapper} from '../../atoms/BadgeWrapper';
import {SettingBarColor} from '../../Color';
import {AvatarBadge} from '../../molecules/AvatarBadge';
import {RibbonText} from '../../molecules/RibbonText';
import {SettingBar} from '../../molecules/SettingBar';
import {StudentSettings} from '../../organisms/StudentSettings';
// import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';
// import {BasicColor} from '../../Color';

export const Testing: FC = () => {
  return (
    <div>
      {/* <AvatarBadge />
      <RibbonText body={'testy test'} /> */}
      {/* <BadgeWrapper /> */}
      {/* <SettingBar body={'testy test'} color={SettingBarColor.accessibility} /> */}
      <StudentSettings />
    </div>
  );
};
