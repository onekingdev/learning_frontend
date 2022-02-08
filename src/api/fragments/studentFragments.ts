import {LEVEL} from './levelFragments'
export const STUDENT_TOPIC_MASTERY = `
        id
        identifier
        isActive
        randomSlug
        isMastery
        isBlock
        dateMastery
`;

export const STUDENT_GRADE = `
        id
        identifier
        isActive
        randomSlug
        isFinish
        percentage
        completeDate
`;

export const STUDENT_ACHIEVEMENTS = `
        id
        identifier
        isActive
        randomSlug
        isLiberate
        liberationDate
`;

export const STUDENT_PLAN = `
        id
        identifier
        isActive
        randomSlug
        name
        slug
`;

export const STUDENT_PLAN_TOPIC_GRADE = `
        id
        identifier
        isActive
        randomSlug
        creditValue
        isAproved
        isFailed
`;

export const STUDENT_TRANSACTION_COLLECTIBLE = `
        id
        identifier
        randomSlug
        date
        comment
        amount
`;

export const STUDENT_COLLECTIBLE = `
        id
        identifier
        isActive
        randomSlug
`;

export const STUDENTS = `
        id
        identifier
        isActive
        randomSlug
        firstName
        fullName 
`;

export const STUDENT = `
        id
        identifier
        isActive
        deletedTimestamp
        randomSlug
        createTimestamp
        updateTimestamp
        firstName
        lastName
        fullName
        dob
        gender
        studentPlan {
            ${STUDENT_PLAN}
        }
        activeStudentPlan {
            ${STUDENT_PLAN}
        }
        avatarAccessories {
            id
        }
        avatarHead {
            id
        }
        avatarClothes {
            id
        }
        avatarPants {
            id
        }
        group {
            id
        }
        activeGroup {
            id
        }
        level {
            ${LEVEL}
        }
        studenttopicmasterySet {
            id
        }
        studentgradeSet {
            id
        }
        studentachievementSet {
            id
        }
        guardianstudentSet {
            id
        }
        blockSet {
            id
        }
        blockpresentationSet {
            id
        }
        blockassignmentSet {
            id
        }
        coinWallet {
            id
        }
        studentcollectibleSet {
            id
        }
        schoolSet {
            id
        }
        audience {
            id
        }
`;
