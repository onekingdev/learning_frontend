import { BLOCK, BLOCK_CONFIGURATION_KEYWORD, BLOCK_PRESENTATON, BLOCK_TYPE, BLOCK_TYPE_CONFIGURATION } from '../fragments/blockFragments';
import {ANSWER_OPTION, AREA_OF_KNOWLEDGE, QUESTION, TOPIC} from '../fragments/questionFragments';

export const TOPICS_QUERY = `
   { 
    ${TOPIC}
    subTopics{
        ${TOPIC}
      }
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
      block
        {
        questions{
            ${QUESTION}
            answeroptionSet
            ${ANSWER_OPTION}
          }
        ${BLOCK}
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
