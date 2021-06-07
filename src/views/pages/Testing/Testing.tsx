import {FC} from 'react';
import {BadgeContainer} from '../../molecules/BadgeContainer';
import {StudentSettings} from '../../organisms/StudentSettings';

export const Testing: FC = () => {
  return (
    <div>
      <StudentSettings />
      <BadgeContainer />
    </div>
  );
};
