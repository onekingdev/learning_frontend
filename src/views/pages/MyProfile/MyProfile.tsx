import {FC} from 'react';
import {AvatarBadge} from '../../molecules/AvatarBadge';
import {BadgeContainer} from '../../molecules/BadgeContainer';
import {StudentSettings} from '../../organisms/StudentSettings';
import {Head, Wrapper} from './Style';

export const MyProfile: FC = () => {
  return (
    <Wrapper>
      <Head>
        <AvatarBadge />
      </Head>
      <BadgeContainer />
      <StudentSettings />
    </Wrapper>
  );
};
