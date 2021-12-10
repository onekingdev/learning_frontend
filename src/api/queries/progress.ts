import {
  COLLECTIBLE,
  COLLECTIBLE_CATEGORY,
} from '../fragments/progressFragments';

export const COLLECTIBLE_QUERY = `
    {
        ${COLLECTIBLE}

    }
`;

export const COLLECTIBLE_CATEGORY_BY_ID_QUERY = `
    {
        ${COLLECTIBLE_CATEGORY}
        collectibleSet{
            ${COLLECTIBLE}
        }
    }
`;
