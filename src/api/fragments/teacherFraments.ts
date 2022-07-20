import { COUPON_COODE, DISCOUNT_CODE_DETAIL, ORDER, PAYMENT_METHOD, PLAN } from "./paymentFragments"
import { GRADES } from "./peopleFragments"

export const CLASSROOM_SCHEMA = `
    id
    identifier
    isActive
    name
    grade {
        ${GRADES}
    }
    language: String
    audience: AudienceSchema!
    enableGames: Boolean!
    gameCostPercentage: Int!
    timeZoneValue: String!
    timeZoneOffset: Int!
    goalCoinsPerDay: Int!
    mondayStart: Time
    mondayEnd: Time
    tuesdayStart: Time
    tuesdayEnd: Time
    wednesdayStart: Time
    wednesdayEnd: Time
    thursdayStart: Time
    thursdayEnd: Time
    fridayStart: Time
    fridayEnd: Time
    saturdayStart: Time
    saturdayEnd: Time
    sundayStart: Time
    sundayEnd: Time
    groupSet: [GroupSchema!]!
    teacherclassroom: TeacherClassroomSchema
    studentSet: [StudentSchema!]!
`

export const TEACHER_SCHEMA = `
    id
    isActive
    discountCode {
        ${DISCOUNT_CODE_DETAIL}
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
        ${CLASSROOM_SCHEMA}
    }
`

export const _TEACHERSCHEMA = `
    id
    identifier
    isActive
    firstName
    lastName
    hasOrder
    zip
    country
`
export const SCHOOL_TEACHER =`
    id
    isActive
    randomSlug
    teacher: TeacherSchema
    plan {
        ${PLAN}
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
        ${PAYMENT_METHOD}
    }
    schoolteacherSet {
        ${SCHOOL_TEACHER}
    }
    schooladministrativepersonnelSet: [SchoolAdministrativePersonnelSchema!]!
`

export const SUBSCRIBER = `
    id
    identifier
    isActive
    deletedTimestamp
    randomSlug
    createTimestamp
    updateTimestamp
    firstName
    lastName
    gender
    hasOrder
    zip
    country
    couponCode {
        ${COUPON_COODE}
    }
    schoolsubscriberSet {
        id
        identifier
        isActive
        deletedTimestamp
        randomSlug
        createTimestamp
        updateTimestamp
        school {
            ${SCHOOL}
        }
    }
`

