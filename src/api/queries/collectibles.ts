import {
  COLLECTIBLE_CATEGORY,
} from '../fragments/collectibleFragments';

export const COLLECTIBLE_CATEGORY_QUERY = `{
  collectiblesCategory {
      ${COLLECTIBLE_CATEGORY}
    }
}
`;

export const OWNED_CARDS_QUERY = `{
  collectibles
  {
    id
    name
    tier
    description {
      key
      value
    }
    category {
      name
    }
    owned
    amount
    image
  }
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
