import {
  COLLECTIBLE_CATEGORY,
  COLLECTIBLE_OWNED_CARD,
} from '../fragments/collectibleFragments';
import axios from 'axios';

export const COLLECTIBLE_CATEGORY_QUERY = `
  {
    ${COLLECTIBLE_CATEGORY}
  }
`;

export const OWNED_CARDS_QUERY = `
{
  name
  tier
  category {
    id
    backImage
    name
  }
  owned
  amount
  image
}
`;

export const COLLECTIBLE_PACK_COUNT = (category: number) => `
query CollectibleCount {
  collectibleCountByCategory(categoryId: ${category})
}
`;

export const COLLECTIBLE_PURCHASED_COUNT = (category: number) => `
query CollectiblePurchasedCount {
  purchasedCollectibleCountByCategory(categoryId: ${category})
}
`;

/**
 * @author Bruce Lee
 * @description send graphql query with axios, cos it returns json, not Promise
 * @returns response object
 */
export const sendQuery = async (
  queryName: string,
  query: string,
  token?: string
) => {
  try {
    const response = await axios.post(
      process.env.NODE_ENV === 'development'
        ? '/graphql/'
        : 'https://api.withsocrates.com/graphql/',
      {
        query: `{
          ${queryName} ${query}
        }`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
