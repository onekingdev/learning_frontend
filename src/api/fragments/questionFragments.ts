export const UNIVERSAL_AOK = `
    {
        id
        identifier
        isActive
        name
        slug
        randomSlug
        deletedTimestamp
        createTimestamp
        updateTimestamp
    }
`;

export const UNIVERSAL_TOPIC = `
    {
        id
        identifier
        isActive
        randomSlug
        name
        slug
        standardCode
        lft
        rght
        treeId
        level
    }
`;

export const AREA_OF_KNOWLEDGE = `
        id
        identifier
        randomSlug
        hexColor
        slug
        image
        name
`;

export const TOPIC = `
        id
        identifier
        isActive
        randomSlug
        slug
        lft
        rght
        treeId
        level
        name
`;

export const TOPIC_GRADE = `
    {
        id
        identifier
        isActive
        randomSlug
        standardCode
    }
`;

export const QUESTION = `
    {
        id
        identifier
        isActive
        randomSlug
        questionText
    }
`;

export const ANSWER_OPTION = `
    {
        id
        identifier
        randomSlug
        isCorrect
        answerText
        explanation
        image
        audioFile
        video
    }
`;
