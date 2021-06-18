import {FC} from 'react';
import {Wrapper, TopicsMenuStyles} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {TopicPresentation} from '../../molecules/TopicPresentation';
import {SubTopicsCarousel} from '../../organisms/SubTopicsCarousel';

export const TopicsMenu: FC = () => {
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <TopicsMenuStyles>
            <TopicPresentation title={'MATH'} />
            <SubTopicsCarousel name={'car1'} />
            <SubTopicsCarousel name={'car2'} />
          </TopicsMenuStyles>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
