import { FC, useContext, useEffect, useState }      from 'react';
import { ScreenSize }                               from 'constants/screenSize';
import styled                                       from 'styled-components';
import wardrobe_icon                                from 'views/assets/wardrobe.png';
import { Link }                                     from 'react-router-dom';
import { useSelector }                              from 'react-redux';
import { LoadingContext }                           from 'react-router-loading';
import { get }                                      from 'api/queries/get';
import { AVATAR }                                   from 'api/fragments/avatarFragments';
import { IAvatar }                                  from 'app/entities/avatar';
import { AvatarSet }                                from '../AvatarSet';
import IconButton                                   from '@mui/material/IconButton';
import StarIcon                                     from '@mui/icons-material/Star';
import { ColorPickerDropdown }                      from 'views/molecules/Avatar/Wardrobe/ColorPickerDropdown';
import { AtomsDrawer }                              from './AtomsDrawer';
import { AtomsSelector }                            from './AtomsSelector';
import { doFetchOwnedAvatars, doSetFavoriteAvatar } from 'app/actions/avatarActions';
import { useSnackbar }                              from 'notistack';

export const WardrobeSelector: FC = () => {

  const user = useSelector((state: any) => state.user);
  const student = useSelector((state: any) => state.student)
  const loadingContext = useContext(LoadingContext);

  const [reload, setReload] = useState(false)

  const [accessoryIndex, setAccessoryIndex] = useState(0);
  const [headerIndex, setHeaderIndex] = useState(0);
  const [bodyIndex, setBodyIndex] = useState(0);
  const [footerIndex, setFooterIndex] = useState(0);

  const [ownedIds, setOwnedIds] = useState([])

  const [atomIndex, setAtomIndex] = useState(0);
  const [avatarItems, setAvatarItems] = useState<IAvatar[]>([]);

  const [atoms, setAtoms] = useState<any>([])

  const [skin, setSkin] = useState('')
  const { enqueueSnackbar } = useSnackbar();

  const handleData = (data: any) => {
    setAvatarItems(data.data.avatars);
  };
  const handleError = (error: any) => {
    console.log(error);
  };

  const setFavorite = async () => {
    const res: any = await doSetFavoriteAvatar(student.id, accessoryIndex, headerIndex, bodyIndex, footerIndex, skin, user.token)
    if (res) {
      enqueueSnackbar('You\'ve set an favorite avatar ', { variant: 'success' });
    }
    else
      enqueueSnackbar('Failed!', { variant: 'error' });
  }

  const reloadData = () => {
    setReload(!reload)
  }
  useEffect(() => {
    fetchOwnedAvatars()
  }, [reload])

  useEffect(() => {
    get('avatars', `{${AVATAR}}`, handleData, handleError);
  }, []);
  useEffect(() => {
    const accessoriesArray = avatarItems.filter(
      (item: any) => item.typeOf === 'ACCESSORIES'
    );
    const headersArray = avatarItems.filter(
      (item: any) => item.typeOf === 'HEAD'
    );
    const bodiesArray = avatarItems.filter(
      (item: any) => item.typeOf === 'CLOTHES'
    );
    const footersArray = avatarItems.filter(
      (item: any) => item.typeOf === 'PANTS'
    );
    setAtoms([accessoriesArray, headersArray, bodiesArray, footersArray])
    loadingContext.done();
  }, [avatarItems]);

  const fetchOwnedAvatars = async () => {
    const res: any = await doFetchOwnedAvatars(student.id, user.token)
    res.msg ? setOwnedIds([]) : setOwnedIds(res)
  }

  const handleOnAtomSelect = (id: number) => {
    const item: any = avatarItems.find(x => x.id === id)
    switch (item.typeOf) {
      case 'ACCESSORIES':
        setAccessoryIndex(id)
        break;
      case 'HEAD':
        setHeaderIndex(id)
        break;
      case 'CLOTHES':
        setBodyIndex(id)
        break;
      case 'PANTS':
        setFooterIndex(id)
        break;

      default:
        break
    }
  }
  const callbackAtomDrawerClick = (id: number) => {
    setAtomIndex(id)
  }

  return (
    <WardrobeModule>
      <AtomsDrawer onAtomClick={callbackAtomDrawerClick} />
      <WardrobeDrawer>
        {avatarItems && ownedIds &&
          <AtomsSelector items={atoms[atomIndex]} onItemClick={handleOnAtomSelect} owned={ownedIds} reload={reloadData} />
        }
      </WardrobeDrawer>
      <AvatarContainer >
        {
          avatarItems &&
          <AvatarSet
            accessory={avatarItems ? avatarItems.find(x => x.id === accessoryIndex)?.image : ''}
            head={avatarItems ? avatarItems.find(x => x.id === headerIndex)?.image : ''}
            pants={avatarItems ? avatarItems.find(x => x.id === footerIndex)?.image : ''}
            body={avatarItems ? avatarItems.find(x => x.id === bodyIndex)?.image : ''}
            skin={skin}
          />
        }
        <ColorPickerDropdown select={setSkin} />
        <div className='star'>
          {
            headerIndex && bodyIndex && footerIndex ?

              <IconButton sx={{
                '&.MuiIconButton-root': {
                  color: 'gold',
                }
              }} aria-label='set favorite' component='span' onClick={setFavorite}>
                <Star />
              </IconButton> :
              <IconButton sx={{
                '&.MuiIconButton-root': {
                  color: 'gray',
                }
              }} disabled aria-label='set favorite' component='span' onClick={setFavorite}>
                <Star />
              </IconButton>
          }
        </div>
        <div className='hanger'>
          <Link to={'/avatar'}>
            <ToggleWardrobe src={wardrobe_icon} />
          </Link>
        </div>
      </AvatarContainer>
    </WardrobeModule>
  );
};

const WardrobeModule = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2vh;
  @media screen and (max-width: ${ScreenSize.phone}) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

const Star = styled(StarIcon)`
  &.MuiSvgIcon-root  {
    transform: scale(1.5);
    &:hover {
      transform: scale(1.6);
    }
  }
`

const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  .hanger {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  @media screen and (max-width: ${ScreenSize.phone}) {
    flex-direction: column;
    .hanger {
      position: absolute;
      top: 0;
      left: auto;
      bottom: auto;
      right: 20px;
    }
    margin-bottom: 10vh;
  }
  .register {
    display: flex;
    align-items: flex-end;
    img {
      z-index: 20;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .star {
    position: absolute;
    bottom: 70px;
    right: 0;
  }
`;

const WardrobeDrawer = styled.div`
  height: 100%;
  padding-bottom: 20px;
  background: rgb(92,43,12);
  background: linear-gradient(90deg, rgba(92,43,12,1) 0%, rgba(205,112,53,1) 4%, rgba(92,43,12,1) 15%, rgba(92,43,12,1) 94%, rgba(174,93,42,1) 99%);
  margin-left: 20px;
  margin-top: 2vh;

@media screen and (max-width: ${ScreenSize.phone}) {
    // display: none;
    background-color: #5c2b0c;
    justify-content: center;
    margin: 10px 0 20px 0;

  }
`;


const ToggleWardrobe = styled.img`
  width: 50px;
`;
