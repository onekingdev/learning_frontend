import {FC} from 'react';
import {TopicCard} from '../../molecules/TopicCard';
import math from '../../assets/math-elements.svg';
import ela from '../../assets/ela-elements.svg';
import science from '../../assets/science-elements.svg';
import sight from '../../assets/sight-words-elements.svg';
import {BasicColor} from '../../Color';
import {Wrapper, TopicCardsContainer, TitleContainer} from './Style';
import {StudentMenu} from '../../templates/StudentMenu';
import {RibbonText} from '../../molecules/RibbonText';
import {dictionary} from './dictionary';

export const TopicsMenu: FC = () => {
  const language = 'en';
  return (
    <>
      <Wrapper>
        <StudentMenu>
          <TitleContainer>
            <RibbonText body={dictionary[language].title} />
          </TitleContainer>
          <TopicCardsContainer>
            <TopicCard
              image={math}
              background={BasicColor.brown}
              subject={dictionary[language].math}
            />
            <TopicCard
              image={ela}
              background={BasicColor.red}
              subject={dictionary[language].ela}
            />
            <TopicCard
              image={science}
              background={BasicColor.green}
              subject={dictionary[language].science}
            />
            <TopicCard
              image={sight}
              background={BasicColor.yellow}
              subject={dictionary[language].sight}
            />
          </TopicCardsContainer>
        </StudentMenu>
      </Wrapper>
    </>
  );
};
