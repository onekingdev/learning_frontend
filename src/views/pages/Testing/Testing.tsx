import {FC} from 'react';
import {BadgeWrapper} from '../../atoms/BadgeWrapper';
import {AvatarBadge} from '../../molecules/AvatarBadge';
import {RibbonText} from '../../molecules/RibbonText';
// import {LessonProgress} from '../../molecules/LessonProgress/LessonProgress';
// import {BasicColor} from '../../Color';

export const Testing: FC = () => {
  return (
    <div>
      <AvatarBadge />
      <RibbonText body={'testy test'} />
      <BadgeWrapper />
    </div>
  );
};
