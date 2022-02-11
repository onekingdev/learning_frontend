import {FC, useEffect, useState} from 'react';
import arrowLeft from '../../../assets/arrows/arrowLeft.svg';
import arrowRight from '../../../assets/arrows/arrowRight.svg';
import favoriteEnabled from '../../../assets/favorite_enabled.svg';
import favoriteDisabled from '../../../assets/favorite_disabled.svg';
import wardrobe from '../../../assets/wardrobe.svg';
import {RoundIcon} from '../../../atoms/Icon/Icon';
import drawer_accessories from '../../../assets/drawers/drawer_accessories.png';
import drawer_hairs from '../../../assets/drawers/drawer_hairs.png';
import drawer_clothes from '../../../assets/drawers/drawer_clothes.png';
import drawer_pants from '../../../assets/drawers/drawer_pants.png';
// import data from '../../../pages/Avatar/atoms'
import axios from 'axios';

import {Link, useHistory} from 'react-router-dom';

import {
  headers,
  bodies,
  footers,
  accessories,
} from '../../../pages/Avatar/atoms';
import {
  AvatarModule,
  SelectorGrid,
  CurrentAvatar,
  CurrentAccessory,
  CurrentHeader,
  CurrentBody,
  CurrentFooter,
  LeftArrow,
  RightArrow,
  FavoriteIcon,
  BodyPartWardrobe,
  AtomsDrawer,
  AvatarWardrobe,
  FavoritesCloset,
  MobileFavoritesDrawer,
  AtomsRoundIcon,
  FavoritesDrawer,
  CenteredRoundIcon,
} from './Style';
import {getAvatarAsset} from '../../../../app/firebase';
import {get} from '../../../../api/queries/get';
export const AvatarSelector: FC = () => {
  const serverUrl = 'http://91.92.109.140/';
  const placeHolder = serverUrl + 'assets/avatars/placeholder.png';
  const accessories_max = accessories.length;
  const headers_max = headers.length;
  const bodies_max = bodies.length;
  const footers_max = footers.length;
  const [accessoryIndex, setAccessoryIndex] = useState(1);
  const [headerIndex, setHeaderIndex] = useState(1);
  const [bodyIndex, setBodyIndex] = useState(1);
  const [footerIndex, setFooterIndex] = useState(1);
  const [atomIndex, setAtomIndex] = useState(0);
  const [favoriteImage, setFavoriteImage] = useState(favoriteDisabled);
  const [accessoryFavorite, setAccessoryFavorite] = useState(placeHolder);
  const [headerFavorite, setHeaderFavorite] = useState(placeHolder);
  const [bodyFavorite, setBodyFavorite] = useState(placeHolder);
  const [footerFavorite, setFooterFavorite] = useState(placeHolder);
  const [iconSize, setIconSize] = useState(80);
  const [testRef, setTestRef] = useState('');

  const [accesoryRef, setAccesoryRef] = useState('');
  const [headRef, setHeadRef] = useState('');
  const [bodyRef, setBodyRef] = useState('');
  const [footRef, setFootRef] = useState('');

  const [favAccesoryRef, setFavAccesoryRef] = useState('');
  const [favHeadRef, setFavHeadRef] = useState('');
  const [favBodyRef, setFavBodyRef] = useState('');
  const [favFootRef, setFavFootRef] = useState('');

  const history = useHistory();

  const width = window.screen.width;
  useEffect(() => {
    // // setSelected avatar
    // getAvatarAsset('accessories', 'accesories-red-bows.svg', setAccesoryRef);
    // getAvatarAsset('heads', 'boy face-1.svg', setHeadRef);
    // getAvatarAsset('bodies', 'tshirt-aqua-large.svg', setBodyRef);
    // getAvatarAsset('pants', 'pant-black.svg', setFootRef);
    // // set fav avatar items
    // getAvatarAsset('accessories', 'accesories-red-bows.svg', setFavAccesoryRef);
    // getAvatarAsset('heads', 'boy face-1.svg', setFavHeadRef);
    // getAvatarAsset('bodies', 'tshirt-aqua-large.svg', setFavBodyRef);
    // getAvatarAsset('pants', 'pant-black.svg', setFavFootRef);

    axios({
      url: 'http://143.244.183.24/graphql/',
      method: 'post',
      data: {
        query: `
        {
          studentById(id: "1") {
            avatarAccessories {
                image
            }
            avatarHead {
              image
            }
            avatarClothes {
              image
            }
            avatarPants {
              image
            }
          }
        }
          `,
      },
    }).then((result: any) => {
      const accesory = result.data.data.studentById.avatarAccessories.image;
      const head = result.data.data.studentById.avatarHead.image;
      const body = result.data.data.studentById.avatarClothes.image;
      const foot = result.data.data.studentById.avatarPants.image;

      setAccesoryRef(accesory);
      setFavAccesoryRef(accesory);

      setHeadRef(head);
      setFavHeadRef(head);

      setBodyRef(body);
      setFavBodyRef(body);

      setFootRef(foot);
      setFavFootRef(foot);
    });

    // get(
    //   'students',
    //   `

    //     id
    //     students {
    //       avatarAccessories {
    //         image
    //       }
    //       avatarHead {
    //         image
    //       }
    //       avatarClothes {
    //         name
    //       }
    //       avatarPants {
    //         name
    //       }
    //     }

    //   `,
    //   console.log,
    //   console.log
    // );

    // {
    //   students {
    //     avatarAccessories {
    //       image
    //     }
    //     avatarHead {
    //       image
    //     }
    //     avatarClothes {
    //       name
    //     }
    //     avatarPants {
    //       name
    //     }
    //   }
    // }

    // mutation SetAvatar {
    //   setStudentAvatar(avatarTypeOf:3, studentId:1, avatarUrl:"clothes.png") {
    //     student {
    //       id
    //       firstName
    //       lastName
    //     }
    //   }
    // }

    width > 420 ? setIconSize(80) : setIconSize(30);
  }, []);

  // useEffect(() => {
  //   console.log('ACCESSROY')
  //   console.log(accesoryRef)
  // }, [accesoryRef])

  // useEffect(() => {
  //   console.log('BODY')
  //   console.log(bodyRef)
  // }, [bodyRef])

  // useEffect(() => {
  //   console.log('HEAD')
  //   console.log(headRef)
  // }, [headRef])

  // useEffect(() => {
  //   console.log('FOOTER')
  //   console.log(footRef)
  // }, [footRef])

  const currentAtomIndex = (val: any) => {
    setAtomIndex(val);
    switch (val) {
      case 1:
        accessoryFavorite === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 2:
        headerFavorite === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 3:
        bodyFavorite === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 4:
        footerFavorite === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
    }
  };
  const currentIndexNext = () => {
    switch (atomIndex) {
      case 1:
        accessoryIndex + 1 < accessories_max
          ? setAccessoryIndex(accessoryIndex + 1)
          : null;
        break;
      case 2:
        headerIndex + 1 < headers_max ? setHeaderIndex(headerIndex + 1) : null;
        break;
      case 3:
        bodyIndex + 1 < bodies_max ? setBodyIndex(bodyIndex + 1) : null;
        break;
      case 4:
        footerIndex + 1 < footers_max ? setFooterIndex(footerIndex + 1) : null;
        break;
    }
  };
  const currentIndexPrev = () => {
    switch (atomIndex) {
      case 1:
        accessoryIndex - 1 < 0 ? null : setAccessoryIndex(accessoryIndex - 1);
        break;
      case 2:
        headerIndex - 1 < 0 ? null : setHeaderIndex(headerIndex - 1);
        break;
      case 3:
        bodyIndex - 1 < 0 ? null : setBodyIndex(bodyIndex - 1);
        break;
      case 4:
        footerIndex - 1 < 0 ? null : setFooterIndex(footerIndex - 1);
        break;
    }
  };
  const setFavorite = () => {
    switch (atomIndex) {
      case 1:
        setAccessoryFavorite(serverUrl + accessories[accessoryIndex].image);
        accessories[accessoryIndex].image === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 2:
        setHeaderFavorite(serverUrl + headers[headerIndex].image);
        headers[headerIndex].image === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 3:
        setBodyFavorite(serverUrl + bodies[bodyIndex].image);
        bodies[bodyIndex].image === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
      case 4:
        setFooterFavorite(serverUrl + footers[footerIndex].image);
        footers[footerIndex].image === placeHolder
          ? setFavoriteImage(favoriteDisabled)
          : setFavoriteImage(favoriteEnabled);
        break;
    }
  };

  return (
    <AvatarModule>
      <FavoritesCloset>
        <MobileFavoritesDrawer>
          <RoundIcon
            src={accessoryFavorite}
            style={{width: '75px', height: '75px', background: '#fff'}}
          ></RoundIcon>
        </MobileFavoritesDrawer>
        <MobileFavoritesDrawer>
          <RoundIcon
            src={headerFavorite}
            style={{width: '75px', height: '75px', background: '#fff'}}
          ></RoundIcon>
        </MobileFavoritesDrawer>
        <MobileFavoritesDrawer>
          <RoundIcon
            src={bodyFavorite}
            style={{width: '75px', height: '75px', background: '#fff'}}
          ></RoundIcon>
        </MobileFavoritesDrawer>
        <MobileFavoritesDrawer>
          <RoundIcon
            src={footerFavorite}
            style={{width: '75px', height: '75px', background: '#fff'}}
          ></RoundIcon>
        </MobileFavoritesDrawer>
      </FavoritesCloset>
      <SelectorGrid>
        <LeftArrow onClick={currentIndexPrev} src={arrowLeft}></LeftArrow>
        <CurrentAvatar>
          <CurrentAccessory
            src={accesoryRef}
            style={{
              width: accessories[accessoryIndex].scale * 160 + 'px',
              top: accessories[accessoryIndex].top + 'px',
              left: accessories[accessoryIndex].left + 'px',
            }}
          />
          {/* <CurrentHeader
            src={headRef}
            style={{
              width: headers[headerIndex].scale * 160 + 'px',
              top: headers[headerIndex].top + 'px',
              left: headers[headerIndex].left + 'px',
            }}
          /> */}
          <CurrentBody src={bodyRef} />
          <CurrentFooter src={footRef} />
        </CurrentAvatar>
        <RightArrow onClick={currentIndexNext} src={arrowRight}></RightArrow>
        <FavoriteIcon onClick={setFavorite} src={favoriteImage}></FavoriteIcon>
        <BodyPartWardrobe src={wardrobe}></BodyPartWardrobe>
        <AtomsDrawer>
          <AtomsRoundIcon
            onClick={() => {
              currentAtomIndex(1);
              history.push('wardrobe/accessories');
            }}
            src={drawer_accessories}
            style={
              atomIndex === 1
                ? {
                    border: 'solid 3px red',
                    width: iconSize - 6 + 'px',
                    height: iconSize - 6 + 'px',
                  }
                : {border: 'solid 0px red'}
            }
          />
          <AtomsRoundIcon
            onClick={() => {
              currentAtomIndex(2);
              history.push('wardrobe/head');
            }}
            src={drawer_hairs}
            style={
              atomIndex === 2
                ? {
                    border: 'solid 3px red',
                    width: iconSize - 6 + 'px',
                    height: iconSize - 6 + 'px',
                  }
                : {border: 'solid 0px red'}
            }
          />

          <AtomsRoundIcon
            onClick={() => {
              currentAtomIndex(3);
              history.push('wardrobe/body');
            }}
            src={drawer_clothes}
            style={
              atomIndex === 3
                ? {
                    border: 'solid 3px red',
                    width: iconSize - 6 + 'px',
                    height: iconSize - 6 + 'px',
                  }
                : {border: 'solid 0px red'}
            }
          />

          <AtomsRoundIcon
            onClick={() => {
              currentAtomIndex(4);
              history.push('wardrobe/pants');
            }}
            src={drawer_pants}
            style={
              atomIndex === 4
                ? {
                    border: 'solid 3px red',
                    width: iconSize - 6 + 'px',
                    height: iconSize - 6 + 'px',
                  }
                : {border: 'solid 0px red'}
            }
          />
        </AtomsDrawer>
        <AvatarWardrobe src={wardrobe}></AvatarWardrobe>
        <FavoritesDrawer>
          <CenteredRoundIcon src={favAccesoryRef}></CenteredRoundIcon>
          <CenteredRoundIcon src={favHeadRef}></CenteredRoundIcon>
          <CenteredRoundIcon src={favBodyRef}></CenteredRoundIcon>
          <CenteredRoundIcon src={favFootRef}></CenteredRoundIcon>
        </FavoritesDrawer>
      </SelectorGrid>
    </AvatarModule>
  );
};
