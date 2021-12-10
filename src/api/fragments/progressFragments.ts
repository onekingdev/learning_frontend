export const AVATARS = `
  {
    id
    identifier
    isActive
    randomSlug
    typeOf
    name
    image
  }
`;

export const LEVEL = `
  {
    id
    identifier
    isActive
    randomSlug
    pointsRequired
    name
  }
`;

export const COLLECTIBLE_CATEGORY = `
  {
    id
    identifier
    isActive
    randomSlug
    lft
    rght
    treeId
    level
    name
  }
`;

export const COLLECTIBLE = `
  {
    id
    identifier
    isActive
    randomSlug
    price
    name
    owned
  }
`;

export const ACHIEVEMENTS = `
  {
    id
    identifier
    isActive
    slug
    image
    hexColor
    engangementPoints
    coinsEarned
    name
  }
`;
