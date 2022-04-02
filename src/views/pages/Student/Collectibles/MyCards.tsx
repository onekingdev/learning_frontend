import { FC, useEffect, useContext, useState } from 'react';
import {
  CardCollectibleContainer,
  Wrapper,
} from './Style';
import { useHistory } from 'react-router-dom';
import { PageTitle } from 'views/molecules/PageTitle';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { BtnContainer } from './Style';
import { Button } from './Style';
import { LoadingContext } from 'react-router-loading';
import { useSelector } from 'react-redux';
import {
  getCardPacksInfo,
} from 'app/actions/collectibleActions';
import { MyCardPacks } from 'views/molecules/StudentCard/MyCards/MyCardPacks'
import { getCollectibleCards } from 'app/actions/collectibleActions';
import { LoadingSpinner } from 'views/atoms/Spinner';

export const MyCardCollection: FC = () => {
  const history = useHistory();
  const loadingContext = useContext(LoadingContext);
  const user = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([]);
  const [allCards, setAllCards] = useState<Array<any>>([]);

  useEffect(() => {
    let ignore = false;
    const fetch = async () => {
      const packs = await getCardPacksInfo(user.token);
      loadingContext.done()
      const allcards = await getCollectibleCards(user.token);
      if (!ignore) {
        if (packs.msg) {
          setCategories([]);
        } else {
          setCategories(packs);
        }
        if (allcards.msg) {
          setAllCards([]);
        } else {
          setAllCards(allcards);
        }
      }
    };

    fetch();

    return () => {
      ignore = true;
    };
  }, [])

  return (
    <Wrapper>
      <StudentMenu>
        <CardCollectibleContainer>
          <PageTitle title='MY CARDS' />
          <BtnContainer>
            <Button onClick={() => history.push('/collectibles/cards')}>
              BUY CARDS
            </Button>
          </BtnContainer>
          {
            allCards.length > 0 ?
              <MyCardPacks packs={categories} allcards={allCards} />
              :
              <LoadingSpinner />
          }
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};
