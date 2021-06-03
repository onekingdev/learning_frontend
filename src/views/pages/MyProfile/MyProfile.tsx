import {FC} from 'react';
import {AvatarBadge} from '../../molecules/AvatarBadge';
import {BadgeContainer} from '../../molecules/BadgeContainer';
import {StudentSettings} from '../../organisms/StudentSettings';
import {Container, Head, Wrapper} from './Style';

export const MyProfile: FC = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Head>
            <AvatarBadge />
          </Head>

          <BadgeContainer />
        </div>
        <div>
          <StudentSettings />
        </div>
      </Container>
    </Wrapper>
  );
};
