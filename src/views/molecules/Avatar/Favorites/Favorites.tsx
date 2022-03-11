import { FC, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import wardrobe from 'views/assets/wardrobe.svg';
import floor from 'views/assets/avatars/floor.png';
import { LoadingContext } from 'react-router-loading';
import { ScreenSize } from 'views/screenSize';
// import IconButton from '@mui/material/IconButton';
// import StarIcon from '@mui/icons-material/Star';
import { useHistory } from 'react-router-dom';
import { AvatarFavorites } from './AvatarFavorites';
import { doFetchFavoriteAvatars } from 'app/actions/avatarActions';
import { AvatarSet } from '../AvatarSet';
import { LeftDrawer } from './LeftDrawer';

export const AvatarSelector: FC = () => {

  const history = useHistory();
  const user = useSelector((state: any) => state.user);
  const student = useSelector((state: any) => state.student)
  const loadingContext = useContext(LoadingContext);

  // TODO-- This state is used to select user avatar from his/her favorites
  // const [currentAvatarId, setCurrentAvatarId] = useState(0)

  const [favories, setFavories] = useState<Array<any>>([])

  const [accessory, setAccessory] = useState('')
  const [head, setHead] = useState('')
  const [body, setBody] = useState('')
  const [footer, setFooter] = useState('')

  const [skin, setSkin] = useState('')


  const fetchFavorites = async () => {
    const res: any = await doFetchFavoriteAvatars(student.id, user.token)
    res.msg ? console.log('error:', res.msg) : setFavories(res)
  }

  const setCurrentAvatar = (id: number) => {
    // setCurrentAvatarId(id)
    favories[id].avatarAccessorie ? setAccessory(favories[id].avatarAccessorie.image) : setAccessory('')
    setHead(favories[id].avatarHead.image)
    setBody(favories[id].avatarClothes.image)
    setFooter(favories[id].avatarPants.image)
    favories[id].skinTone ? setSkin(favories[id].skinTone) : setSkin('')
  }

  // TODO: Do not delete this comment. THIS WILL BE USED IN THE FUTURE
  // const setUserAvatar = () => {
  //   console.log('setted')
  // }

  useEffect(() => {
    fetchFavorites()
    loadingContext.done()
  }, [])

  useEffect(() => {
    if (favories.length) {

      favories[0].avatarAccessorie ? setAccessory(favories[0].avatarAccessorie.image) : setAccessory('')
      setHead(favories[0].avatarHead.image)
      setBody(favories[0].avatarClothes.image)
      setFooter(favories[0].avatarPants.image)
      favories[0].skinTone ? setSkin(favories[0].skinTone) : setSkin('')
    }
  }, [favories])

  return (
    <>
      <TopDrawer> {/* This is displayed in mobile view only */}
        <AvatarFavorites select={setCurrentAvatar} favorites={favories} />
      </TopDrawer>
      <Container>
        <div onClick={() => history.push('wardrobe')}>
          <LeftDrawer />
        </div>
        <Drawer src={wardrobe} onClick={() => history.push('wardrobe')} />
        <AvatarSet accessory={accessory} head={head} body={body} pants={footer} skin={skin} />
        {/* <div style={{ position: 'absolute'}}>
          <IconButton style={{ position: 'absolute', left: 0, bottom: 0 }} color='warning' aria-label='set favorite' component='span' onClick={setUserAvatar}>
            <StarIcon style={{ transform: 'scale(2)' }} />
          </IconButton>
        </div> */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <RightDrawer> {/* This is displayed in desktop view only */}
            <AvatarFavorites select={setCurrentAvatar} favorites={favories} />
          </RightDrawer>
          <Floor src={floor} />
        </div>
      </Container>
    </>
  );
};

const Floor = styled.img`
  margin-left: -10px;
  margin-right: -10px;
  width: calc( 100% + 20px);
  height: 15px;
  @media screen and (max-width: ${ScreenSize.phone}) {
    display: none;
  }
`

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  gap: 30px;
  margin: 2vh 10vw 2vh 10vw;
  align-items: center;

  @media screen and (max-width: ${ScreenSize.phone}) {
    margin: 5vh 0 10vh 0;
    width: 100%;
    justify-content: center;
    gap: 0;
  }
`;

export const TopDrawer = styled.div`
display: none;
@media screen and (max-width: ${ScreenSize.phone }) {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: calc((100vw - 30px ) / 4);
  background: #5C2B0C;
  width: 100%;
  column-gap: 10px;
  z-index: 1;
}
`

const RightDrawer = styled.div`
  display: grid;
  padding: 10px 15px 10px 15px;
  min-height: 400px;
  min-width: 100px;
  grid-template-rows: repeat(4, 1fr);
  background: rgb(92,43,12);
  background: linear-gradient(90deg, rgba(92,43,12,1) 0%, rgba(205,112,53,1) 4%, rgba(92,43,12,1) 15%, rgba(92,43,12,1) 94%, rgba(174,93,42,1) 99%);
  row-gap: 10px;
  @media screen and (max-width: ${ScreenSize.phone}) {
    display: none;
  }
`
const Drawer = styled.img`
  display: none;
  @media screen and (max-width: ${ScreenSize.phone}) {
    display: block;
    height: 130px;
    position: absolute;
    left: 10vw;
    bottom: 10vh;
    z-index: 10;
  }
`;
