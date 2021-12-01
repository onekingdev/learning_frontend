import {FC} from 'react';
import {TopicCard} from '../../molecules/TopicCard';
import math from '../../assets/math-elements.svg';
import ela from '../../assets/ela-elements.svg';
import science from '../../assets/science-elements.svg';
import sight from '../../assets/sight-words-elements.svg';
import {BasicColor} from '../../Color';
import {Wrapper, SubjectsCardsContainer, TitleContainer} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {RibbonText} from '../../molecules/RibbonText';
import {dictionary} from './dictionary';
import {useHistory} from 'react-router-dom';

export const SubjectsMenu: FC = () => {
  const history = useHistory();
  const language = 'en';
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <TitleContainer>
            <RibbonText body={dictionary[language].title} />
          </TitleContainer>
          <SubjectsCardsContainer>
            <TopicCard
              image={math}
              background={BasicColor.orange}
              subject={dictionary[language].math}
              onClick={() => history.push('/topic')}
              isButton={true}
            />
            <TopicCard
              image={ela}
              background={BasicColor.red}
              subject={dictionary[language].ela}
              onClick={() => history.push('/topic')}
              isButton={true}
            />
            <TopicCard
              image={science}
              background={BasicColor.green}
              subject={dictionary[language].science}
              onClick={() => history.push('/topic')}
              isButton={true}
            />
            <TopicCard
              image={sight}
              background={BasicColor.yellow}
              subject={dictionary[language].sight}
              onClick={() => history.push('/topic')}
              isButton={true}
            />
          </SubjectsCardsContainer>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
