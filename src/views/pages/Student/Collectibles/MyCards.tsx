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
import { dictionary } from './dictionary;';
export const MyCardCollection: FC = () => {
  const history = useHistory();
  const loadingContext = useContext(LoadingContext);
  const user = useSelector((state: any) => state.user);
  const [categories, setCategories] = useState([]);
  const [allCards, setAllCards] = useState<Array<any>>([]);
  let language: string = useSelector((state: any) => state.user.language);
  language = language ? language : "EN_US"

  useEffect(() => {
    let ignore = false;
    const fetch = async () => {
      console.log('loading started')
      const packs = await getCardPacksInfo(user.token);
      loadingContext.done()
      console.log('loaded card packs', packs)
      // const allcards = await getCollectibleCards(user.token);
      // console.log('loaded from backend:', allcards)
      if (!ignore) {
        if (packs.msg) {
          setCategories([]);
        } else {
          setCategories(packs);
        }
        // if (allcards.msg) {
        //   setAllCards([]);
        // } else {
        //   setAllCards(allcards);
        // }
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
          <PageTitle title={dictionary[language]?.myCards} />
          <BtnContainer>
            <Button onClick={() => history.push('/collectibles/cards')}>
              {dictionary[language]?.buyCards}
            </Button>
          </BtnContainer>
          <MyCardPacks packs={categories} />
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};
