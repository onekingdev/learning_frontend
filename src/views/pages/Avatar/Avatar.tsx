import {FC} from 'react';
import {AvatarFavorites} from '../../molecules/Avatar/AvatarFavorites';
import {AvatarFavoritesTitle} from '../../molecules/Avatar/AvatarFavoritesTitle';
import {AvatarSelector} from '../../molecules/Avatar/AvatarSelector';
import {AvatarContainer, Wrapper} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import boy1 from '../../assets/avatars/headers/boy1.svg';
import boy2 from '../../assets/avatars/headers/boy2.svg';
import boy3 from '../../assets/avatars/headers/boy3.svg';
import boy4 from '../../assets/avatars/headers/boy4.svg';
import boy5 from '../../assets/avatars/headers/boy5.svg';
import boy6 from '../../assets/avatars/headers/boy6.svg';
import boy7 from '../../assets/avatars/headers/boy7.svg';
import boy8 from '../../assets/avatars/headers/boy8.svg';
import boy9 from '../../assets/avatars/headers/boy9.svg';
import boy10 from '../../assets/avatars/headers/boy10.svg';
import boy11 from '../../assets/avatars/headers/boy11.svg';
import boy12 from '../../assets/avatars/headers/boy12.svg';
import girl1 from '../../assets/avatars/headers/girl1.svg';
import girl2 from '../../assets/avatars/headers/girl2.svg';
import girl3 from '../../assets/avatars/headers/girl3.svg';
import girl4 from '../../assets/avatars/headers/girl4.svg';
import girl5 from '../../assets/avatars/headers/girl5.svg';
import girl6 from '../../assets/avatars/headers/girl6.svg';
import girl7 from '../../assets/avatars/headers/girl7.svg';
import girl8 from '../../assets/avatars/headers/girl8.svg';
import girl9 from '../../assets/avatars/headers/girl9.svg';
import girl10 from '../../assets/avatars/headers/girl10.svg';
import girl11 from '../../assets/avatars/headers/girl11.svg';
import girl12 from '../../assets/avatars/headers/girl12.svg';
import pants1 from '../../assets/avatars/footers/pants1.svg';
import pants2 from '../../assets/avatars/footers/pants2.svg';
import pants3 from '../../assets/avatars/footers/pants3.svg';
import pants4 from '../../assets/avatars/footers/pants4.svg';
import pants5 from '../../assets/avatars/footers/pants5.svg';
import pants6 from '../../assets/avatars/footers/pants6.svg';
import pants7 from '../../assets/avatars/footers/pants7.svg';
import pants8 from '../../assets/avatars/footers/pants8.svg';
import skirt1 from '../../assets/avatars/footers/skirt1.svg';
import skirt2 from '../../assets/avatars/footers/skirt2.svg';
import skirt3 from '../../assets/avatars/footers/skirt3.svg';
import skirt4 from '../../assets/avatars/footers/skirt4.svg';
import skirt5 from '../../assets/avatars/footers/skirt5.svg';
import skirt6 from '../../assets/avatars/footers/skirt6.svg';
import skirt7 from '../../assets/avatars/footers/skirt7.svg';
import skirt8 from '../../assets/avatars/footers/skirt8.svg';
import skirt9 from '../../assets/avatars/footers/skirt9.svg';
import skirt10 from '../../assets/avatars/footers/skirt10.svg';
import tshirt1 from '../../assets/avatars/bodies/tshirt1.svg';
import tshirt2 from '../../assets/avatars/bodies/tshirt2.svg';
import tshirt3 from '../../assets/avatars/bodies/tshirt3.svg';
import tshirt4 from '../../assets/avatars/bodies/tshirt4.svg';
import tshirt5 from '../../assets/avatars/bodies/tshirt5.svg';
import tshirt6 from '../../assets/avatars/bodies/tshirt6.svg';
import baseball from '../../assets/avatars/accessories/baseball.svg';
import astronayut from '../../assets/avatars/accessories/astronayut.svg';
import bow from '../../assets/avatars/accessories/bow.svg';
import cat_ears from '../../assets/avatars/accessories/cat_ears.svg';
import cat_hat from '../../assets/avatars/accessories/cat_hat.svg';
import cocodrile_hat from '../../assets/avatars/accessories/cocodrile_hat.svg';
import hats from '../../assets/avatars/accessories/hats.svg';
import hats1 from '../../assets/avatars/accessories/hats1.svg';
import helmet from '../../assets/avatars/accessories/helmet.svg';
import king from '../../assets/avatars/accessories/king.svg';
import ninja from '../../assets/avatars/accessories/ninja.svg';
import penguin_hat from '../../assets/avatars/accessories/penguin_hat.svg';
import pirate from '../../assets/avatars/accessories/pirate.svg';
import red_hay from '../../assets/avatars/accessories/red_hay.svg';
import summer_hat from '../../assets/avatars/accessories/summer_hat.svg';
import sunglasses from '../../assets/avatars/accessories/sunglasses.svg';
import super_hero from '../../assets/avatars/accessories/super_hero.svg';
import viking from '../../assets/avatars/accessories/viking.svg';
import winter_hat from '../../assets/avatars/accessories/winter_hat.svg';
import witch_hat from '../../assets/avatars/accessories/witch_hat.svg';
import fire from '../../assets/avatars/accessories/fire.svg';
import fly from '../../assets/avatars/accessories/fly.svg';
import glasses from '../../assets/avatars/accessories/glasses.svg';

export const Avatar: FC = () => {
  const headers = [];
  headers.push({image: boy1, scale: 1.03, top: 3, left: 0});
  headers.push({image: boy2, scale: 1, top: 0, left: 0});
  headers.push({image: boy3, scale: 1, top: -6, left: 0});
  headers.push({image: boy4, scale: 1, top: 0, left: 0});
  headers.push({image: boy5, scale: 1, top: 0, left: 0});
  headers.push({image: boy6, scale: 1.03, top: 4, left: 0});
  headers.push({image: boy7, scale: 1, top: 0, left: 0});
  headers.push({image: boy8, scale: 1, top: -5, left: 0});
  headers.push({image: boy9, scale: 1, top: 0, left: 0});
  headers.push({image: boy10, scale: 1.03, top: 4, left: 0});
  headers.push({image: boy11, scale: 1, top: 0, left: 0});
  headers.push({image: boy12, scale: 1, top: 0, left: 0});
  headers.push({image: girl1, scale: 1, top: -7, left: 0});
  headers.push({image: girl2, scale: 1, top: 0, left: 0});
  headers.push({image: girl3, scale: 1, top: 5, left: 0});
  headers.push({image: girl4, scale: 1, top: 1, left: 0});
  headers.push({image: girl5, scale: 1, top: 4, left: 0});
  headers.push({image: girl6, scale: 1, top: 6, left: 0});
  headers.push({image: girl7, scale: 1.1, top: 1, left: -10});
  headers.push({image: girl8, scale: 1, top: -4, left: 0});
  headers.push({image: girl9, scale: 1, top: 0, left: 0});
  headers.push({image: girl10, scale: 1.1, top: 1, left: 0});
  headers.push({image: girl11, scale: 1, top: -8, left: 0});
  headers.push({image: girl12, scale: 1.1, top: 5, left: 0});
  const bodies = [];
  bodies.push({image: tshirt1});
  bodies.push({image: tshirt2});
  bodies.push({image: tshirt3});
  bodies.push({image: tshirt4});
  bodies.push({image: tshirt5});
  bodies.push({image: tshirt6});
  const footers = [];
  footers.push({image: pants1});
  footers.push({image: pants2});
  footers.push({image: pants3});
  footers.push({image: pants4});
  footers.push({image: pants5});
  footers.push({image: pants6});
  footers.push({image: pants7});
  footers.push({image: pants8});
  footers.push({image: skirt1});
  footers.push({image: skirt2});
  footers.push({image: skirt3});
  footers.push({image: skirt4});
  footers.push({image: skirt5});
  footers.push({image: skirt6});
  footers.push({image: skirt7});
  footers.push({image: skirt8});
  footers.push({image: skirt9});
  footers.push({image: skirt10});
  const accessories = [];
  accessories.push({image: astronayut, scale: 1.1, top: -8, left: 0});
  accessories.push({image: baseball, scale: 0.95, top: -30, left: 0});
  accessories.push({image: bow, scale: 0.9, top: -30, left: 0});
  accessories.push({image: fire, scale: 1.15, top: -66, left: 0});
  accessories.push({image: fly, scale: 1.04, top: -25, left: 0});
  accessories.push({image: glasses, scale: 0.56, top: 6, left: 0});
  accessories.push({image: cat_ears, scale: 0.87, top: -52, left: 0});
  accessories.push({image: cat_hat, scale: 1.09, top: -30, left: 0});
  accessories.push({image: cocodrile_hat, scale: 1.09, top: -48, left: 0});
  accessories.push({image: hats, scale: 1.09, top: -48, left: 0});
  accessories.push({image: helmet, scale: 1, top: -60, left: 0});
  accessories.push({image: king, scale: 1, top: -54, left: 0});
  accessories.push({image: ninja, scale: 1.04, top: -20, left: 0});
  accessories.push({image: penguin_hat, scale: 0.8, top: -60, left: 0});
  accessories.push({image: pirate, scale: 1.1, top: -30, left: 0});
  accessories.push({image: red_hay, scale: 0.8, top: -60, left: 0});
  accessories.push({image: summer_hat, scale: 1, top: -50, left: 0});
  accessories.push({image: sunglasses, scale: 0.56, top: 6, left: 0});
  accessories.push({image: super_hero, scale: 1, top: 0, left: 0});
  accessories.push({image: viking, scale: 1.17, top: -55, left: 0});
  accessories.push({image: witch_hat, scale: 1.1, top: -90, left: 0});
  return (
    <Wrapper>
      <StudentMenu>
        <AvatarContainer>
          <AvatarFavoritesTitle />
          <AvatarFavorites />
          <AvatarSelector
            accessories={accessories}
            headers={headers}
            bodies={bodies}
            footers={footers}
          />
        </AvatarContainer>
      </StudentMenu>
    </Wrapper>
  );
};
