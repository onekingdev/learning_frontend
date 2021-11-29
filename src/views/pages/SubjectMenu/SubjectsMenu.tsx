import {FC, useEffect, useState} from 'react';
import {TopicCard} from '../../molecules/TopicCard';
import math from '../../assets/math-elements.svg';
import {BasicColor} from '../../Color';
import {Wrapper, SubjectsCardsContainer, TitleContainer} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {RibbonText} from '../../molecules/RibbonText';
import {dictionary} from './dictionary';
import {useHistory} from 'react-router-dom';
import {get} from '../../../api/queries';
import {TOPIC} from '../../../api/fragments/questionFragments';

export const SubjectsMenu: FC = () => {
  const history = useHistory();
  const language = 'en';
  const [topics, setTopics] = useState([]);

  const handleData = (data: any) => {
    setTopics(data.data.topics);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get('topics', TOPIC, handleData, handleError);
    console.log(topics);
  }, []);

  return (
    <>
      <Wrapper>
        <StudentMenu>
          <TitleContainer>
            <RibbonText body={dictionary[language].title} />
          </TitleContainer>
          <SubjectsCardsContainer>
            {topics.map((topic: {name: string}) => (
              <TopicCard
                image={math}
                background={BasicColor.orange}
                subject={topic.name}
                onClick={() => history.push('/topic')}
                isButton={true}
              />
            ))}
          </SubjectsCardsContainer>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
