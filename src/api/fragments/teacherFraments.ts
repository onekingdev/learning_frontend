import { AREA_OF_KNOWLEDGE_RAW } from "./areaOfKnowledgeFragments"

export const _CLASSROOM_SCHEMA = `
    id
    identifier
    isActive
    name
    language
    enableGames
    gameCostPercentage
    timeZoneValue
    timeZoneOffset
    goalCoinsPerDay
    mondayStart
    mondayEnd
    tuesdayStart
    tuesdayEnd
    wednesdayStart
    wednesdayEnd
    thursdayStart
    thursdayEnd
    fridayStart
    fridayEnd
    saturdayStart
    saturdayEnd
    sundayStart
    sundayEnd
    isEmpty
`

export const TEACHER_SCHEMA = `
    id
    isActive
    discountCode {
        id
        identifier
        isActive
        deletedTimestamp
        randomSlug
        code
        percentage
        trialDay
        expiredAt
        stripeCouponId
        type
    }
    name
    lastName
    gender
    dateOfBirth
    identificationNumber
    position
    zip
    country
    district
    classroomSet {
        ${_CLASSROOM_SCHEMA}
    }
`

export const _TEACHER_CLASSROOM = `
    id
    isActive
    cancelReason
    isCancel
    isPaid
    expiredAt
    period
    price
`
export const _TEACHERSCHEMA = `
    id
    isActive
    firstName
    lastName
    hasOrder
    zip
    country
`
export const SCHOOL_TEACHER = `
    id
    isActive
    randomSlug
    teacher: TeacherSchema
    plan {
        id
        identifier
        name
        description
        areaOfKnowledge
        slug
        priceMonth
        priceYear
        currency
        isCancel
        subjects {
            ${AREA_OF_KNOWLEDGE_RAW}
        }
    }
    orderDetail: OrderDetailSchema
    cancelReason
    isCancel
    isPaid
    expiredAt
    period
    price
`

export const SCHOOL = `
    id
    identifier
    isActive
    deletedTimestamp
    randomSlug
    createTimestamp
    updateTimestamp
    name
    typeOf
    zip
    country
    district
    paymentmethodSet {
        id
        method
        cardFirstName
        cardLastName
        cardNumber
        cardExpMonth
        cardExpYear
        cardCvc
        address1
        address2
        city
        state
        postCode
        country
        phone
        isDefault
    }
    schoolteacherSet {
        ${SCHOOL_TEACHER}
    }
    schooladministrativepersonnelSet: [SchoolAdministrativePersonnelSchema!]!
`

