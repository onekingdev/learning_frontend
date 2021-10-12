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
  fragment avatarData on AvatarSchema {
    id
    isActive
    typeOf
    name
    image
  }
`;

export const LEVEL_FRAGMENT = gql`
  fragment levelData on LevelSchema {
    id
    isActive
    pointsRequired
    name
  }
`;

export const ACHIEVEMENT_FRAGMENT = gql`
  ${LEVEL_FRAGMENT}
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

export const STUDENT_FRAGMENT = gql`
  ${LEVEL_FRAGMENT}, 
  ${AVATAR_FRAGMENT}
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

export const ANSWER_FRAGMENT = gql`
  fragment answerData on AnswerOptionSchema {
    id
    identifier
    isCorrect
    answerText
    explanation
    image
    audioFile
    video
  }
`;

export const QUESTION_FRAGMENT = gql`
  ${ANSWER_FRAGMENT}
  fragment questionData on QuestionSchema {
    id
    isActive
    questionText
    answeroptionSet {
      ...answerData
    }
  }
`;

export const BLOCK_PRESENTATION_FRAGMENT = gql`
  fragment blockPresentationData on BlockPresentationSchema {
    id
    isActive
    hits
    errors
    total
    points
  }
`;

export const BLOCK_FRAGMENT = gql`
  ${QUESTION_FRAGMENT},
  ${BLOCK_PRESENTATION_FRAGMENT}
  fragment blockData on BlockSchema{
	  id
    isActive
    modality
    questions {
      ...questionData
    }
    modality
    blockpresentationSet{
      ...blockPresentationData
    }
    blockconfigurationSet{
      id
      key {
        id
        isActive
        name
      }
      value
    }
}`;

export const STUDENT_PLAN_FRAGMENT = gql`
  fragment studentPlanData on StudentPlanSchema {
    id
    isActive
    name
    slug
    totalCredits
    validityDate
  }
`;

export const AUDIENCE_FRAGMENT = gql`
  ${STUDENT_PLAN_FRAGMENT}
  fragment audienceData on AudienceSchema {
    id
    isActive
    slug
    name
    studentplanSet {
      ...studentPlanData
    }
  }
`;

export const AREAS_OF_KNOWLEDGE_FRAGMENT = gql`
  ${AUDIENCE_FRAGMENT}
  fragment areaOfKnowledgeData on AreaOfKnowledgeSchema {
    id
    identifier
    hexColor
    slug
    image
    audience {
      ...audienceData
    }
    name
  }
`;
