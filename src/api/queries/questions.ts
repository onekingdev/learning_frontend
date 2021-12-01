import {AREA_OF_KNOWLEDGE, TOPIC} from '../fragments/questionFragments';

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
