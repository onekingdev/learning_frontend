import {AREA_OF_KNOWLEDGE} from './areaOfKnowledgeFragments'

export const PAYMENT_METHOD = `
  id
  randomSlug
  createTimestamp
  updateTimestamp
  method
  isDefault
  slug
`
export const PLAN = `
    id
    identifier
    createTimestamp
    updateTimestamp
    name
    description
    areaOfKnowledge
    slug
    priceMonth
    priceYear
    currency
    isCancel
    subjects {
        ${AREA_OF_KNOWLEDGE}
    }
`
export const GUARDIAN_STUDENT_PLAN = `
    id
    identifier
    randomSlug
    student {
        id
    }
    slug
    plan {
      ${PLAN}
    }
    subject {
        id
    }
    cancelReason
    isCancel
    isPaid
    expiredAt
    period
    price
    
`
export const ORDER_DETAIL = `
    id
    identifier
    createTimestamp
    updateTimestamp
    guardianStudentPlan{
        ${GUARDIAN_STUDENT_PLAN}
    }
    plan{
        ${PLAN}
    }
    quantity
    period
    total
    slug
`

export const ORDER = `
  id
  subTotal
  discountCode
  discount
  total
  paymentMethod
  isPaid
  slug
  orderdetailSet {
    ${ORDER_DETAIL}
  }
`

