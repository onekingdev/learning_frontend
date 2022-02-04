import { AUDIENCES } from '../fragments/peopleFragments';
import { AREA_OF_KNOWLEDGE_QUERY } from './questions';

export const AUDIENCES_QUERY = `
    ${AUDIENCES}
    areaofknowledgeSet
    ${AREA_OF_KNOWLEDGE_QUERY}
`;
