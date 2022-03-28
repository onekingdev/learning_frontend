import {FC}           from 'react';
import {useHistory}   from 'react-router-dom';
import {Wrapper}      from './Style';
import {PageTitle}    from 'views/molecules/PageTitle';
import {StudentMenu}  from '../Menus/StudentMenu';
import {CardCategory} from 'views/molecules/StudentCard/CardsCategory';
import { BtnContainer, Button } from './Style';


export const Cards: FC = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <StudentMenu>
        <div>
          <PageTitle title='Collectible Cards'/>
          <BtnContainer>
            <Button onClick={() => history.push('/collectibles/mycards')}>
              MY COLLECTION
            </Button>
          </BtnContainer>
          <CardCategory />
        </div>
      </StudentMenu>
    </Wrapper>
  );
};

