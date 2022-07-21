import { COUPON_COODE, DISCOUNT_CODE_DETAIL, PAYMENT_METHOD, PLAN } from "./paymentFragments"
import { AUDIENCES, GRADES } from "./peopleFragments"

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

