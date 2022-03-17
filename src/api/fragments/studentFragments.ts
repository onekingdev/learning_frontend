import { LEVEL } from './levelFragments'
import { COIN_WALLET } from './coinWalletFragments'
import { AVATAR } from './avatarFragments'
import { BANK_WALLET } from './bankFragments'
import { AUDIENCES }from './peopleFragments'
import { AREA_OF_KNOWLEDGE }from './areaOfKnowledgeFragments'
import { GRADES } from './peopleFragments'

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
`


export const ORDER_DETAIL_RAW = `
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
`

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
        points
        intPeriodStartAt
        activeStudentPlan {
            ${STUDENT_PLAN}
        }
        avatarAccessories {
            ${AVATAR}
        }
        avatarHead {
            ${AVATAR}
        }
        avatarClothes {
            ${AVATAR}
        }
        avatarPants {
            ${AVATAR}
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
        nextLevel {
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
        guardianstudentplan{
            subject {
                ${AREA_OF_KNOWLEDGE}
            }
            ${GUARIDAN_STUDENT_PLAN_RAW}
            orderDetail {
                ${ORDER_DETAIL_RAW}
            }
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
            ${COIN_WALLET}
        }
        bankWallet {
            ${BANK_WALLET}
        }
        studentcollectibleSet {
            id
        }
        schoolSet {
            id
        }
        audience {
            ${AUDIENCES}
            areaofknowledgeSet {
                ${AREA_OF_KNOWLEDGE}
            } 
        }
        grade {
            ${STUDENT_GRADE}
            grade{
                ${GRADES}
            }
        }
`;
