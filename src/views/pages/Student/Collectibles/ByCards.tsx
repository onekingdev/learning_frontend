import { useHistory } from 'react-router-dom';
import { Wrapper } from './Style';
import { PageTitle } from 'views/molecules/PageTitle';
import { StudentMenu } from 'views/pages/Student/Menus/StudentMenu';
import { BtnContainer, Button } from './Style';
import { FC, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import {
  getCardPacksInfo,
} from 'app/actions/collectibleActions';
import { CardPacks } from 'views/molecules/StudentCard/ByCardsPage/CardPacks';
import { LoadingSpinner } from 'views/atoms/Spinner';
import { LoadingContext } from 'react-router-loading';
import { useSnackbar } from 'notistack';


export const Cards: FC = () => {
  const history = useHistory();
  const user = useSelector((state: any) => state.user);
  const [packs, setPacks] = useState([]);
  const [loading, setLoading] = useState(true)
  const loadingContext = useContext(LoadingContext);
  const { enqueueSnackbar } = useSnackbar();

  const fetchCategories = async (mounted: boolean) => {
    try {
      const res = await getCardPacksInfo(user.token);
      if (mounted) {
        if (res.msg) {
          setPacks([]);
          enqueueSnackbar('Server error:' + res.msg, { variant: 'error' })
        } else {
          setPacks(res);
          setLoading(false)
        }
      }
    } catch (e) {
      enqueueSnackbar('Network Error'+ e, { variant: 'error' })
    }
    loadingContext.done();

  };

  useEffect(() => {
    // make sure to update state when component is mounted.
    let mounted = true;

    fetchCategories(mounted)

    return () => {
      mounted = false
    }
  }, []);

  return (
    <Wrapper>
      <StudentMenu>
        {/* <div> */}
          <PageTitle title='Collectible Cards' />
          <BtnContainer>
            <Button onClick={() => history.push('/collectibles/mycards')}>
              MY COLLECTION
            </Button>
          </BtnContainer>
          {
            loading ?
              <LoadingSpinner />
              :
              <CardPacks cards={packs} />
          }
        {/* </div> */}
      </StudentMenu>
    </Wrapper>
  );
};

