import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ScreenSize } from 'constants/screenSize';
import { MyCardPack } from './MyCardPack';
import {
  doFetchCategoryCollectibles,
  getProgressPurchasedCount,
  getProgressTotalCount,
} from 'app/actions/collectibleActions';
import { GemProgressBar } from './GemProgressBar';
import { MyPackcards } from './MyCardPackcards';
import { getCollectibleCards } from 'app/actions/collectibleActions';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { useSnackbar }    from 'notistack';

interface CardPropArray {
  packs: {
    name: string;
    id: number;
    owned: boolean
    firebaseName: string
  }[];
  // allcards: {
  //   tier: string;
  //   owned: boolean
  //   category: {
  //     name: string,
  //     id: number,
  //     firebaseName: string
  //   }
  //   id: number;
  // }[];
}

export const MyCardPacks: FC<CardPropArray> = ({ packs }) => {
  const user = useSelector((state: any) => state.user);
  const { enqueueSnackbar } = useSnackbar();

  // State to store currently selected card
  const [selected, setSelected] = useState(0)
  const [loading, setLoading] = useState(false)

  // const [allcards, setAllcards] = useState<Array<any>>([])

  const [packcards, setPackcards] = useState<Array<any>>([])

  // states to store progress bar data
  const [gainedCount, setGainedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // get total count and gained count of selected category, this is for progress bar
  const fetchProgressData = async (id: number) => {
    // setPackcards(allcards.filter(card => card.category.id === id))
    // TODO: fetch category collectibles from backend
    setLoading(true)
    const res = await doFetchCategoryCollectibles(id, user.token)
    if (res.succeed) {
      setPackcards(res.cards)
      // enqueueSnackbar(dictionary[language]?.youVeSetAnFavoriteAvatar, { variant: 'success' });
      enqueueSnackbar('fetch success', { variant: 'success' });
    } else {
      enqueueSnackbar(res.msg, { variant: 'error' });
    }

    const total = await getProgressTotalCount(
      id,
      user.token
    );
    total.msg ? setTotalCount(0) : setTotalCount(total);


    const purchased = await getProgressPurchasedCount(
      id,
      user.token
    );
    purchased.msg ? setGainedCount(0) : setGainedCount(purchased);
  };

  // This function is called from child, this is passed as prop to child component
  const callbackCardSelect = useCallback((packId: number) => {
    setSelected(packId)
    fetchProgressData(packId);
  }, []);

  // const fetchAllCards = async (mounted: boolean) => {
  //   setLoading(true)
  //   const allcards = await getCollectibleCards(user.token);
  //   if(mounted){
  //     // TODO: set
  //     setAllcards(allcards)
  //   }
  //   setLoading(false)
  // }

  useEffect(() => {
    let mounted = true
    // fetchAllCards(mounted)
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <StyledCardContainer>
        {packs.map((item) => (
          <MyCardPack
            key={item.id}
            id={item.id}
            select={callbackCardSelect}
            category={item.name}
            purchased={item.owned}
            isSelected={item.id === selected}
            firebaseName={item.firebaseName}
          />
        ))}
      </StyledCardContainer>
      <GemProgressBar
        totalCount={totalCount}
        gainedCount={gainedCount}
        firebaseName={packs.find((pack) => pack.id === selected)?.firebaseName}
      />
      {
        loading ?
          <LoadingSpinner /> :
          <MyPackcards packcards={packcards} />
      }
    </div>
  );
};

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin: 1rem;
  position: relative;

  @media screen and (max-width: ${ScreenSize.tablet}) {
    display: grid;
    width: 80vw;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    padding: 0;
    margin: 0;
  }
`;
