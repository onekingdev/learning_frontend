import {FC, useEffect, useState} from 'react';
import {Wrapper, TopicsMenuStyles} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {TopicPresentation} from '../../molecules/TopicPresentation';
import {SubTopicsCarousel} from '../../organisms/SubTopicsCarousel';
import {get} from '../../../api/queries/get';
import {AREA_OF_KNOWLEDGE_QUERY} from '../../../api/queries/questions';
import {useParams} from 'react-router-dom';

interface RouteTopicParams {
  topicId: string;
}

export const TopicsMenu: FC = () => {
  const {topicId} = useParams<RouteTopicParams>();
  const [areaOfKnowledge, setAreaOfKnowledge] = useState({
    name: '',
    topicSet: [],
    image: '',
  });

  const handleData = (data: any) => {
    setAreaOfKnowledge(data.data.areaOfKnowledgeById);
  };
  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get(
      `areaOfKnowledgeById(id:"${topicId}")`,
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
            <TopicPresentation
              title={areaOfKnowledge.name}
              image={areaOfKnowledge.image}
            />
            {areaOfKnowledge.topicSet.map((item: any) => (
              <SubTopicsCarousel name={item.name} subTopics={item.subTopics} />
            ))}
          </TopicsMenuStyles>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
