import {
    GUARDIAN_STUDENT,
    GUARDIAN,
    } from '../fragments/guardianFragments';
import  {
    USER,
    USER_PROFILE
} from '../fragments/userFragments'
import {PAYMENT_METHOD ,PLAN, GUARDIAN_STUDENT_PLAN, ORDER_DETAIL, ORDER} from '../fragments/paymentFragments'
import {STUDENT}from '../fragments/studentFragments'


export const CREATE_ORDER = (
    cardCvc: string,
    cardExpMonth: string,
    cardExpYear: string,
    cardFirstName: string,
    cardLastName: string,
    cardNumber: string,
    discountCode: string,
    guardianId: number,
    orderDetailInput: {},
    paymentMethod: string,
    returnUrl: string,
) => `
    createOrder(cardCvc: "${cardCvc}", cardExpMonth: "${cardExpMonth}", cardExpYear: "${cardExpYear}", cardFirstName: "${cardFirstName}", cardLastName: "${cardLastName}", cardNumber: "${cardNumber}", discountCode: "${discountCode}", guardianId: "${guardianId}", orderDetailInput: ${orderDetailInput}, paymentMethod: "${paymentMethod}", returnUrl: "${returnUrl}"){
        guardian {
            ${GUARDIAN}
            guardianstudentSet {
                ${GUARDIAN_STUDENT}
                student {
                    ${STUDENT}
                }
            }
            guardianstudentplanSet {
                ${GUARDIAN_STUDENT_PLAN}
            }
            orderSet {
                ${ORDER}
            }
            paymentmethodSet {
                ${PAYMENT_METHOD}
            }
            paymentMethod {
                ${PAYMENT_METHOD}
            }
        }
        order{
            ${ORDER}
        }
        status
        urlRedirect
    }
`;

export const CONFIRM_PAYMENT_ORDER = (
    orderId: number,
) => `
    confirmPaymentOrder(orderId: ${orderId}){
        guardian {
            ${GUARDIAN}
            guardianstudentSet {
                ${GUARDIAN_STUDENT}
                student {
                    ${STUDENT}
                }
            }
            guardianstudentplanSet {
                ${GUARDIAN_STUDENT_PLAN}
            }
            orderSet {
                ${ORDER}
            }
            paymentmethodSet {
                ${PAYMENT_METHOD}
            }
            paymentMethod {
                ${PAYMENT_METHOD}
            }
        }
        order{
            ${ORDER}
        }
        status
    }
    
`

export const CHANGE_PAYMENT_METHOD = (
    guardianId: number,
    method: string
) => `
    changePaymentMethod(guardianId: ${guardianId}, method: ${method}){
        status
    }
`

export const CREATE_GUARDIAN_STUDENT_PLAN = (
    guardianId: number,
    listSubjectId: number,
    period: string,
    planId: number,
    price: number,
    returnUrl: string,
    studentId: number
) => `
    createGuardianStudentPlan(
        guardianId: ${guardianId},
        listSubjectId: ${listSubjectId},
        period: "${period}",
        planId: ${planId},
        price: ${price},
        returnUrl: "${returnUrl}",
        studentId: ${studentId}
    ) {
        guardianStudentPlan {
            ${GUARDIAN_STUDENT_PLAN}
        }
        order {
            ${ORDER}
        }
        urlRedirect
    }
`

export const UPDATE_GUARDIAN_STUDENT_PLAN = (
    guardianStudentPlanId: number,
    period: string,
    price: number,
    returnUrl: string
) => `
    updateGuardianStudentPlan(
        guardianStudentPlanId: ${guardianStudentPlanId},
        period: "${period}",
        price: ${price},
        returnUrl: "${returnUrl}"
    ) {
        guardianStudentPlan {
            ${GUARDIAN_STUDENT_PLAN}
        }
        order {
            ${ORDER}
        }
        urlRedirect
    }
`

export const CANCEL_GUARDIAN_STUDENT_PLAN = (
    guardianStudentPlanId: number,
    reason: string,
) => `
    cancelGuardianStudentPlan(
        guardianStudentPlanId: ${guardianStudentPlanId},
        reason: "${reason}"
    ) {
        guardianStudentPlan {
            ${GUARDIAN_STUDENT_PLAN}
        }
    }
`

export const CANCEL_MEMBERSHIP = (
    guardianId: number,
    reason: string
) => `
    cancelMembership(
        guardianId: ${guardianId},
        reason: "${reason}"
    ) {
        status
    }
`

