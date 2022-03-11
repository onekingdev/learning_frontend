import { STUDENT } from '../fragments/studentFragments';
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
