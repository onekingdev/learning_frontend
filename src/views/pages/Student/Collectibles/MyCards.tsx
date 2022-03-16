import { FC } from 'react';
import {
  CardCollectibleContainer,
  Wrapper,
} from './Style';
import {useHistory} from 'react-router-dom';
import { PageTitle } from 'views/molecules/PageTitle';
import { StudentMenu } from '../../../templates/StudentMenu';
import { MyCardCategory } from 'views/molecules/StudentCard/MyCardsCategory';
import { BtnContainer } from './Cards';
import { Button } from './Cards';
export const MyCardCollection: FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <StudentMenu>
        <CardCollectibleContainer>
        <PageTitle title='MY CARDS'/>
          <BtnContainer>
            <Button onClick={() => history.push('/collectibles/cards')}>
              BUY CARDS
            </Button>
          </BtnContainer>
          <MyCardCategory />
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};
