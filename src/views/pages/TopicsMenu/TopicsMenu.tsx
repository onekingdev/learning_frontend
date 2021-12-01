import {FC, useEffect, useState} from 'react';
import {Wrapper, TopicsMenuStyles} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {TopicPresentation} from '../../molecules/TopicPresentation';
import {SubTopicsCarousel} from '../../organisms/SubTopicsCarousel';
import {get} from '../../../api/queries/get';
import {AREA_OF_KNOWLEDGE} from '../../../api/fragments/questionFragments';
import {AREA_OF_KNOWLEDGE_QUERY} from '../../../api/queries/questions';

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
      'areaOfKnowledgeById(id:"1")',
      AREA_OF_KNOWLEDGE_QUERY,
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
