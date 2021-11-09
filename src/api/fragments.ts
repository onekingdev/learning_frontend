export const COLLECTIBLE_FRAGMENT = `
    query{
      collectibles{
        id
      isActive
      price
      category {
        id
        isActive
        name
      }
      name
      }
    }
`;

export const AVATAR_FRAGMENT = `
    id
    isActive
    typeOf
    name
    image
`;

export const LEVEL_FRAGMENT = `
    id
    isActive
    pointsRequired
    name
`;

export const ACHIEVEMENT_FRAGMENT = `
    id
    isActive
    image
    hexColor
    levelRequired {
      ${LEVEL_FRAGMENT}
    }
    engangementPoints
    coinsEarned
    name
`;

export const STUDENT_FRAGMENT = `
    id
    isActive
    firstName
    gender
    level {
      ${LEVEL_FRAGMENT}
    }
    avatar {
      ${AVATAR_FRAGMENT}
    }
`;

export const ANSWER_FRAGMENT = `
    id
    identifier
    isCorrect
    answerText
    explanation
    image
    audioFile
    video
`;

export const QUESTION_FRAGMENT = `
    id
    isActive
    questionText
    answeroptionSet {
      ${ANSWER_FRAGMENT}
    }
`;

export const BLOCK_PRESENTATION_FRAGMENT = `
    id
    isActive
    hits
    errors
    total
    points
`;

export const BLOCK_FRAGMENT = `
	  id
    isActive
    modality
    questions {
      ${QUESTION_FRAGMENT}
    }
    modality
    blockpresentationSet{
     ${BLOCK_PRESENTATION_FRAGMENT}
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
`;

export const STUDENT_PLAN_FRAGMENT = `
    id
    isActive
    name
    slug
    totalCredits
    validityDate
`;

export const AUDIENCE_FRAGMENT = `
    id
    isActive
    slug
    name
    studentplanSet {
      ${STUDENT_PLAN_FRAGMENT}
    }
`;

export const AREAS_OF_KNOWLEDGE_FRAGMENT = `
    id
    identifier
    hexColor
    slug
    image
    audience {
      ${AUDIENCE_FRAGMENT}
    }
    name
`;
