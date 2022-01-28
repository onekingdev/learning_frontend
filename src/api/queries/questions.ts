import { BLOCK, BLOCK_CONFIGURATION_KEYWORD, BLOCK_PRESENTATON, BLOCK_TYPE, BLOCK_TYPE_CONFIGURATION } from '../fragments/blockFragments';
import {ANSWER_OPTION, AREA_OF_KNOWLEDGE, QUESTION, TOPIC, TOPIC_GRADE} from '../fragments/questionFragments';


export const TOPICS_QUERY = `
   { 
    ${TOPIC}
    subTopics{
        ${TOPIC}
      }
    }
`;


export const TOPIC_GRADE_QUERY = `
  {
    ${TOPIC_GRADE}
    topic
    ${TOPICS_QUERY}
  }
`;

export const AREA_OF_KNOWLEDGE_QUERY = `
    {
    ${AREA_OF_KNOWLEDGE}
    topicSet
    ${TOPICS_QUERY}  
    }
`;

export const QUESTION_QUERY = `
    {
      ${QUESTION}
      answeroptionSet
      ${ANSWER_OPTION}
    }
`;

export const BLOCK_PRESENTATION_QUERY = `
    {
      ${BLOCK_PRESENTATON}
      block{
        ${BLOCK}
        questions{
            ${QUESTION}
            answeroptionSet
            ${ANSWER_OPTION}
        }
        topicGrade{
          ${TOPIC_GRADE}
          topic{
            videoAssistor
          }
        }
        typeOf{
          ${BLOCK_TYPE}
            blocktypeconfigurationSet{
              ${BLOCK_TYPE_CONFIGURATION}
              key
              ${BLOCK_CONFIGURATION_KEYWORD}
            }
        }
      }
         
    }
`;
