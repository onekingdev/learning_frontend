import { FC, useContext, useEffect } from 'react';
import { AvatarBadge } from 'views/molecules/AvatarBadge';
import { BadgeContainer } from 'views/molecules/BadgeContainer';
import { StudentSettings } from 'views/organisms/StudentSettings';
import { StudentMenu } from 'views/templates/StudentMenu';
import { Container, Head, Wrapper } from './Style';
import { LoadingContext } from 'react-router-loading';

export const MyProfile: FC = () => {
  const loadingContext = useContext(LoadingContext);
  useEffect(() => {
    loadingContext.done();
  }, []);
  return (
    <Wrapper>
      <StudentMenu>
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
      </StudentMenu>
    </Wrapper>
  );
};
