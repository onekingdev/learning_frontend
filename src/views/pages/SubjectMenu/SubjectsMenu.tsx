import {FC, useEffect, useState} from 'react';
import {TopicCard} from '../../molecules/TopicCard';
import {Wrapper, SubjectsCardsContainer, TitleContainer} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {RibbonText} from '../../molecules/RibbonText';
import {dictionary} from './dictionary';
import {useHistory} from 'react-router-dom';
import {get} from '../../../api/queries/get';
import {AREA_OF_KNOWLEDGE} from '../../../api/fragments/questionFragments';

export const SubjectsMenu: FC = () => {
  const history = useHistory();
  const language = 'en';
  const [areasOfKnowledge, setTopics] = useState([]);

  const handleData = (data: any) => {
    setTopics(data.data.areasOfKnowledge);
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get('areasOfKnowledge', `{${AREA_OF_KNOWLEDGE}}`, handleData, handleError);
    console.log(areasOfKnowledge);
  }, []);

  return (
    <>
      <Wrapper>
        <StudentMenu>
          <TitleContainer>
            <RibbonText body={dictionary[language].title} />
          </TitleContainer>
          <SubjectsCardsContainer>
            {areasOfKnowledge.map(
              (areaOfKnowledge: {
                name: string;
                image: string;
                hexColor: string;
              }) => (
                <TopicCard
                  image={areaOfKnowledge.image}
                  background={areaOfKnowledge.hexColor}
                  subject={areaOfKnowledge.name}
                  onClick={() => history.push('/topic')}
                  isButton={true}
                />
              )
            )}
          </SubjectsCardsContainer>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
