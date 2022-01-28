import {FC, useEffect, useState} from 'react';
import {TopicCard} from '../../molecules/TopicCard';
import {Wrapper, SubjectsCardsContainer, TitleContainer} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {RibbonText} from '../../molecules/RibbonText';
import {dictionary} from './dictionary';
import {useHistory} from 'react-router-dom';
import {get} from '../../../api/queries/get';
import {AREA_OF_KNOWLEDGE} from '../../../api/fragments/questionFragments';
import { useDispatch } from 'react-redux';
import * as TYPE from '../../../app/types';

export const SubjectsMenu: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = 'en';
  const [areasOfKnowledge, setTopics] = useState([]);

  const handleData = (data: any) => {
    setTopics(data.data.areasOfKnowledge);
    dispatch({type: TYPE.SET_AOK, payload: data.data.areasOfKnowledge});
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get('areasOfKnowledge', `{${AREA_OF_KNOWLEDGE}}`, handleData, handleError);
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
                id: any;
              }) => (
                <TopicCard
                  image={`https://api.withsocrates.com/media/${areaOfKnowledge.image}`}
                  background={areaOfKnowledge.hexColor}
                  subject={areaOfKnowledge.name}
                  onClick={() => history.push(`/topic/${areaOfKnowledge.id}`)}
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
