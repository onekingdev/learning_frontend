import {FC, useContext, useEffect} from 'react';
import {AvatarBadge} from '../../molecules/AvatarBadge';
import {BadgeContainer} from '../../molecules/BadgeContainer';
import {StudentSettings} from '../../organisms/StudentSettings';
import {StudentMenu} from '../../templates/StudentMenu';
import {Container, Head, Wrapper} from './Style';
import {LoadingContext} from 'react-router-loading';

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
