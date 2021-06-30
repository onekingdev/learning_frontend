import {FC} from 'react';
import {CardCollectibleContainer, Wrapper} from './Style';
import {CardCollectibleTitle} from '../../molecules/CardCollectible/CardCollectibleTitle';
import {CardsStore} from '../../molecules/CardCollectible/CardsStore';
import {CardCollectibleCarrousel} from '../../molecules/CardCollectible/CardCollectibleCarrousel';
import {StudentMenu} from '../../templates/StudentMenu';

export const CardCollectible: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <CardCollectibleContainer>
          <CardCollectibleTitle></CardCollectibleTitle>
          <CardsStore></CardsStore>
          <CardCollectibleCarrousel></CardCollectibleCarrousel>
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};
