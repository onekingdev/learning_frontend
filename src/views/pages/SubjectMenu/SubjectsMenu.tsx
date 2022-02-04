import {FC, useEffect, useState} from 'react';
import {TopicCard} from '../../molecules/TopicCard';
import {Wrapper, SubjectsCardsContainer, TitleContainer} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {RibbonText} from '../../molecules/RibbonText';
import {dictionary} from './dictionary';
import {useHistory} from 'react-router-dom';
import {get} from '../../../api/queries/get';
import { useDispatch } from 'react-redux';
import * as TYPE from '../../../app/types';
import { AUDIENCES_QUERY } from '../../../api/queries/people';
import { IAreasOfKnowledge } from '../../../app/entities/areasOfKnowledge';

export const SubjectsMenu: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const language = 'en';
  const [areasOfKnowledge, setTopics] = useState<IAreasOfKnowledge[]>([]);

  const handleData = (data: any) => {
    setTopics(data.data.audienceById.areaofknowledgeSet);
    dispatch({type: TYPE.SET_AOK, payload: data.data.audienceById.areaofknowledgeSet});
  };

  const handleError = (error: any) => {
    console.error(error);
  };

  useEffect(() => {
    get('audienceById(id:"2")', `{${AUDIENCES_QUERY}}`, handleData, handleError);
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
              (areaOfKnowledge: IAreasOfKnowledge) => (
                <TopicCard
                  image={`https://api.withsocrates.com/media/${areaOfKnowledge.image}`}
                  background={areaOfKnowledge.hexColor}
                  subject={areaOfKnowledge.name}
                  onClick={() => history.push(`/topic/${areaOfKnowledge.id}`)}
                  isButton={true}
                  isActive={areaOfKnowledge.isActive}
                />
              )
            )}
          </SubjectsCardsContainer>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
