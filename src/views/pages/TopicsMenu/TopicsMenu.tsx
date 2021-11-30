import {FC, useEffect, useState} from 'react';
import {Wrapper, TopicsMenuStyles} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {TopicPresentation} from '../../molecules/TopicPresentation';
import {SubTopicsCarousel} from '../../organisms/SubTopicsCarousel';
import {get} from '../../../api/queries';
import {AREA_OF_KNOWLEDGE} from '../../../api/fragments/questionFragments';

export const TopicsMenu: FC = () => {
  const [areaOfKnowledge, setAreaOfKnowledge] = useState({name: ''});

  const handleData = (data: any) => {
    setAreaOfKnowledge(data.data.areaOfKnowledgeById);
    console.log(areaOfKnowledge);
  };
  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get(
      'areaOfKnowledgeById(id:"2")',
      AREA_OF_KNOWLEDGE,
      handleData,
      handleError
    );
  }, []);
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <TopicsMenuStyles>
            <TopicPresentation title={areaOfKnowledge.name} />
            <SubTopicsCarousel name={'car1'} />
            <SubTopicsCarousel name={'car2'} />
          </TopicsMenuStyles>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
