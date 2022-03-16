import { FC, useContext, useEffect, useState } from 'react';
import { ScreenSize } from 'views/screenSize';
import styled from 'styled-components';
import wardrobe from 'views/assets/wardrobe.svg';
import wardrobe_icon from 'views/assets/wardrobe.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import arrowUp from 'views/assets/arrows/arrowUp.svg';
import { LoadingContext } from 'react-router-loading';
import { get } from 'api/queries/get';
import { AVATAR } from 'api/fragments/avatarFragments';
import { IAvatar } from 'app/entities/avatar';
import { AvatarSet } from '../AvatarSet';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import { ColorPickerDropdown } from 'views/molecules/Avatar/Wardrobe/ColorPickerDropdown';
import { AtomsDrawer } from './AtomsDrawer';
import { AtomsSelector } from './AtomsSelector';
import { doFetchOwnedAvatars, doSetFavoriteAvatar } from 'app/actions/avatarActions';
import { useSnackbar } from 'notistack';
import { SKIN } from 'constants/avatar';

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
      <SelectorGrid>
        <WardrobeContainer>
          <BodyPartWardrobe src={wardrobe} />
          <AtomsDrawer onAtomClick={callbackAtomDrawerClick} />
        </WardrobeContainer>
        <WardrobeDrawer>
          {avatarItems && ownedIds &&
            <AtomsSelector items={atoms[atomIndex]} onItemClick={handleOnAtomSelect} owned={ownedIds} reload={reloadData} />
          }
          <ArrowsContainer>
            <ArrowImage src={arrowUp} />
          </ArrowsContainer>
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
                <IconButton color='secondary' aria-label='set favorite' component='span' onClick={setFavorite}>
                  <Star />
                </IconButton> :
                <IconButton color='primary' disabled aria-label='set favorite' component='span' onClick={setFavorite}>
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
      </SelectorGrid>
    </WardrobeModule>
  );
};

const WardrobeModule = styled.div`
  width: 90%
  margin: 0 auto;
`;

const Star = styled(StarIcon)`
  &.MuiSvgIcon-root  {
    transform: scale(1.5);
    &:hover {
      transform: scale(1.6);
    }
  }
`

const SelectorGrid = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  margin-top: 100px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    margin-top: 20px;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  .hanger {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  @media screen and (min-width: ${ScreenSize.desktop}) {
    flex-direction: column;
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

const WardrobeContainer = styled.div`
  position: relative;
`;
const BodyPartWardrobe = styled.img`
  top: 0;
  position: absolute;
  z-index: -1;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-self: end;
  align-self: end;
  height: 130px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    grid-row: 1 / 2;
    height: 100%;
    max-height: 480px;
  }
`;

const WardrobeDrawer = styled.div`
  display: none;
  background-color: #5c2b0c;
  height: 420px;
  align-self: end;
  margin: 10px 20px;
  @media screen and (min-width: ${ScreenSize.phone}) {
    width: 90%;
    max-width: 550px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr 60px;
    align-content: center;
    justify-content: start;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;


const ToggleWardrobe = styled.img`
  width: 50px;
`;

const ArrowsContainer = styled.div`
  width: 40px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const ArrowImage = styled.img`
  width: 30px;
`;
