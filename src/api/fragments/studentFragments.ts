export const STUDENTS = `
    {
        id
        identifier
        isActive
        randomSlug
        firstName
        fullName 
    }
`;

export const STUDENT_TOPIC_MASTERY = `
    {
        id
        identifier
        isActive
        randomSlug
        isMastery
        isBlock
        dateMastery
    }
`;

export const STUDENT_GRADE = `
    {
        id
        identifier
        isActive
        randomSlug
        isFinish
        percentage
        completeDate
    }
`;

export const STUDENT_ACHIEVEMENTS = `
    {
        id
        identifier
        isActive
        randomSlug
        isLiberate
        liberationDate
    }
`;

export const STUDENT_PLAN = `
    {
        id
        identifier
        isActive
        randomSlug
        name
        slug
        totalCredits
        validityDate
    }
`;

export const STUDENT_PLAN_TOPIC_GRADE = `
    {
        id
        identifier
        isActive
        randomSlug
        creditValue
        isAproved
        isFailed
    }
`;

export const STUDENT_TRANSACTION_COLLECTIBLE = `
    {
        id
        identifier
        randomSlug
        date
        comment
        amount
    }
`;

export const STUDENT_COLLECTIBLE = `
    {
        id
        identifier
        isActive
        randomSlug
    }
`;
