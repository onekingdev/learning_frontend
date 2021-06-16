import {FC} from 'react';
import {Wrapper, TopicsMenuStyles} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {TopicPresentation} from '../../molecules/TopicPresentation';
import {SubTopicCard} from '../../molecules/SubTopicCard';

export const TopicsMenu: FC = () => {
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <TopicsMenuStyles>
            <TopicPresentation title={'MATH'} />
            <SubTopicCard />
          </TopicsMenuStyles>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
