import {gql} from '@apollo/client';

export const COLLECTIBLE_FRAGMENT = gql`
  fragment collectibleData on CollectibleSchema {
    id
    isActive
    price
    category {
      id
      isActive
      name
    }
    name
    owned
  }
`;

export const AVATAR_FRAGMENT = gql`
  fragment avatarData on AvatarSchema
    id
    isActive
    typeOf
    name
    image	
}`;

export const LEVEL_FRAGMENT = gql`
  fragment levelData on LevelSchema {
    id
    isActive
    pointsRequired
    name
  }
`;

export const ACHIEVEMENT_FRAGMENT = gql`
  fragment achievementData on AchievementSchema {
    id
    isActive
    image
    hexColor
    levelRequired {
      ...levelData
    }
    engangementPoints
    coinsEarned
    name
  }
`;

export const STUDENT_DATA = gql`
  fragment studentData on StudentSchema {
    id
    isActive
    firstName
    gender
    level {
      ...levelData
    }
    avatar {
      ...avatarData
    }
  }
`;
