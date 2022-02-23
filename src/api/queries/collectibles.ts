import {
  COLLECTIBLE_CATEGORY,
  COLLECTIBLE_OWNED_CARD,
} from '../fragments/collectibleFragments';
import axios from 'axios';

export const COLLECTIBLE_CATEGORY_QUERY = `{
  collectiblesCategory {
      ${COLLECTIBLE_CATEGORY}
    }
}
`;

export const OWNED_CARDS_QUERY = `{
  collectibles
  {
    name
    tier
    description
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
