import {FC} from 'react';
import {Wrapper, TopicsMenuStyles} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {TopicPresentation} from '../../molecules/TopicPresentation';

export const TopicsMenu: FC = () => {
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <TopicsMenuStyles>
            <TopicPresentation title={'MATH'} />
          </TopicsMenuStyles>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
