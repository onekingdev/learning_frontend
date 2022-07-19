import { COUPON_COODE } from "./paymentFragments"

export const TEACHER_SCHEMA = `
    id
    identifier
    isActive
    deletedTimestamp
    randomSlug
    createTimestamp
    updateTimestamp
    user: UserSchema
    school: SchoolSchema
    discountCode: DiscountCodeSchema
    name
    lastName
    gender: SchoolPersonnelGender
    dateOfBirth
    identificationNumber
    position
    zip
    country
    district
    schoolpersonnelPtr: SchoolPersonnelSchema!
    classroomSet: [ClassroomSchema!]!
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
`
