import { STUDENT } from '../fragments/studentFragments';
import { BLOCK_PRESENTATON, BLOCK } from '../fragments/blockFragments'
import { QUESTION } from '../fragments/questionFragments'
import { BLOCK_PRESENTATION_QUERY } from '../queries/questions'
export const FINISH_BLOCK_PRESENTATION = (
    block_presentation_id: string,
    hits: number,
    errors: number,
    bonusCoins: number,
    questionResults: any
) => `
finishBlockPresentation( blockPresentationId: ${block_presentation_id}, errors: ${errors}, hits: ${hits}, bonusCoins: ${bonusCoins}, questions: ${questionResults} ) {
    blockPresentation{
        ${BLOCK_PRESENTATON}
    }
    student {
        ${STUDENT}
    }
}
`;

export const CREATE_AI_BLOCK_PRESENTATION = (
    aokId: number,
) => `
createAiBlockPresentation( aokId: ${aokId}) {
    blockPresentation ${BLOCK_PRESENTATION_QUERY}
}
`;

export const CREATE_PATH_BLOCK_PRESENTATION = (
    studentId: number,
    topicId: number,
) => `
createPathBlockPresentation( studentId: ${studentId}, topicId: ${topicId}) {
    blockPresentation ${BLOCK_PRESENTATION_QUERY}
}
`;
