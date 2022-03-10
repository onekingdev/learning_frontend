import { STUDENT } from "../fragments/studentFragments";
import { BLOCK_PRESENTATON } from '../fragments/blockFragments'

export const FINISH_BLOCK_PRESENTATION = (
    block_presentation_id: string,
    hits: number,
    errors: number,
    bonusCoins: number
) => `
finishBlockPresentation( blockPresentationId: ${block_presentation_id}, errors: ${errors}, hits: ${hits}, bonusCoins: ${bonusCoins} ) {
    blockPresentation{
        ${BLOCK_PRESENTATON}
    }
    student{
        ${STUDENT}
    }
}
`;

export const CREATE_AI_BLOCK_PRESENTATION = (
    aokId: number,
    studentId: number,
) => `
createAiBlockPresentation( aokId: ${aokId}, studentId: ${studentId}) {
    blockPresentation{
        ${BLOCK_PRESENTATON}
    }
}
`;

export const CREATE_PATH_BLOCK_PRESENTATION = (
    studentId: number,
    topicId: number,
) => `
createPathBlockPresentation( studentId: ${studentId}, topicId: ${topicId}) {
    blockPresentation{
        ${BLOCK_PRESENTATON}
    }
}
`;
