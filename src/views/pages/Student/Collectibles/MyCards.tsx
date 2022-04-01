import { FC, useEffect, useContext } from 'react';
import {
  CardCollectibleContainer,
  Wrapper,
}                       from './Style';
import {useHistory}     from 'react-router-dom';
import { PageTitle }    from 'views/molecules/PageTitle';
import { StudentMenu }  from 'views/pages/Student/Menus/StudentMenu';
import { MyCards }      from 'views/molecules/StudentCard/MyCards';
import { BtnContainer } from './Style';
import { Button }       from './Style';
import { LoadingContext } from 'react-router-loading';
export const MyCardCollection: FC = () => {
  const history = useHistory();
  const loadingContext = useContext(LoadingContext);

  useEffect(() => {
    loadingContext.done()
  },[])

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
          <MyCards />
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};
