import { BANK_WALLET } from './bankFragments';
import { AUDIENCES } from './peopleFragments';
import { AREA_OF_KNOWLEDGE } from './areaOfKnowledgeFragments';
import { GRADES } from './peopleFragments';
import { TOPIC } from './questionFragments';
import { _CLASSROOM_SCHEMA } from './teacherFraments';
import { COIN_WALLET, LEVEL, _AVATAR, _BATTERY, _STUDENT } from './schemas';



export const GUARIDAN_STUDENT_PLAN_RAW = `
    id
    identifier
    randomSlug
    slug
    cancelReason
    isCancel
    isPaid
    expiredAt
    period
    price
`;

const ORDER_DETAIL_RAW = `
    id
    identifier
    createTimestamp
    updateTimestamp
    paymentMethodPlanId
    subscriptionId
    quantity
    period
    updateFromDetailId
    status
    onDiscount
    discount
    expiredAt
    isPaid
    cancelReason
    isCancel
    slug
    total
`;


export const ORDER_RAW = `
id
identifier
createTimestamp
updateTimestamp
discount
isPaid
slug
total
subTotal
discountCode
`;

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
        isFinished
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



export const LastWeekAndCoinsQuestions = (weekCount: number) => `
    students {
        id
        lastWeekQuestions(weekCount: ${weekCount}) {
            day
            questions
        }
        lastWeekCoins(weekCount: ${weekCount}) {
            day
            coins
        }
    }
`;

export const STUDENT_HOMEWORK = `
    id
    isActive
    name
    topic {
        ${TOPIC}
        areaOfKnowledge {
            name
        }
    }
    numberOfQuestions
    startAt
    endAt
    status
    blockSet {
        id
    }
    result {
        hits
        total
    }
`

export const STUDENT = `
    ${_STUDENT}
    activeStudentPlan {
        ${STUDENT_PLAN}
    }
    level {
        ${LEVEL}
    }
    nextLevel {
        ${LEVEL}
    }
    guardianstudentplan{
        subject {
            ${AREA_OF_KNOWLEDGE}
        }
        ${GUARIDAN_STUDENT_PLAN_RAW}
        orderDetail {
            ${ORDER_DETAIL_RAW}
        }
    }
    coinWallet {
        ${COIN_WALLET}
    }
    bankWallet {
        ${BANK_WALLET}
    }
    battery {
        ${_BATTERY}
    }
    audience {
        ${AUDIENCES}
        areaofknowledgeSet {
            ${AREA_OF_KNOWLEDGE}
        }
        gradeSet {
            ${GRADES}
        }
    }
    grade {
        ${STUDENT_GRADE}
        grade{
            ${GRADES}
        }
    }
    currentAvatarHead {
        ${_AVATAR}
    }
    currentAvatarAccessories {
        ${_AVATAR}
    }
    currentAvatarClothes {
        ${_AVATAR}
    }
    currentAvatarPants {
        ${_AVATAR}
    }
    classroom {
        ${_CLASSROOM_SCHEMA}
    }
`;

