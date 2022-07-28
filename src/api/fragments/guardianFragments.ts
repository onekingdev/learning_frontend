import { AREA_OF_KNOWLEDGE_QUERY } from 'api/queries/questions';
import { PAYMENT_METHOD, PLAN, PLAN_RAW } from '../fragments/paymentFragments'
import { COUPON_COODE, } from '../fragments/paymentFragments';
import { AREA_OF_KNOWLEDGE_RAW } from './areaOfKnowledgeFragments';
import { STUDENT } from './studentFragments';

export const GUARDIAN = `
    id
    isActive
    firstName
    lastName
    gender
    couponCode {
        ${COUPON_COODE}
    }
    paymentMethod {
        ${PAYMENT_METHOD}
    }
    guardianstudentplanSet {
        plan {
            id
        }
    }
`

export const GUARDIAN_ORDERS = `
orderSet {
  id
  orderdetailSet{
    id
    quantity
    period
    total
    expiredAt
    isCancel
    isPaid
    plan {
      ${PLAN_RAW}
    }
  }
}
`
export const GUARDIAN_STUDENT_PLAN = `
    id
    identifier
    randomSlug
    student {
        ${STUDENT}
    }
    slug
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
    subject {
        ${AREA_OF_KNOWLEDGE_QUERY}
    }
    cancelReason
    isCancel
    isPaid
    expiredAt
    period
    price
`
