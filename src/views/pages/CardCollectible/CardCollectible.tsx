import {FC} from 'react';
import {CardCollectibleContainer, Wrapper} from './Style';
import {CardCollectibleTitle} from '../../molecules/CardCollectible/CardCollectibleTitle';
import {CardCollectibleStore} from '../../molecules/CardCollectible/CardCollectibleStore';
import {CardCollectibleCarrousel} from '../../molecules/CardCollectible/CardCollectibleCarrousel';
import {StudentMenu} from '../../templates/StudentMenu';

export const CardCollectible: FC = () => {
  return (
    <Wrapper>
      <StudentMenu>
        <CardCollectibleContainer>
          <CardCollectibleTitle></CardCollectibleTitle>
          <CardCollectibleStore></CardCollectibleStore>
          <CardCollectibleCarrousel></CardCollectibleCarrousel>
        </CardCollectibleContainer>
      </StudentMenu>
    </Wrapper>
  );
};
