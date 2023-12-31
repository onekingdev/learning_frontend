import { _SCHOOL_SCHEMA } from 'api/fragments/schemas';
import { _TEACHERSCHEMA } from 'api/fragments/teacherFraments';
import { GUARDIAN, GUARDIAN_STUDENT_PLAN, }                  from '../fragments/guardianFragments';
import { PAYMENT_METHOD, ORDER } from '../fragments/paymentFragments'


export const CREATE_ORDER = (
    cardCvc: string,
    cardExpMonth: string,
    cardExpYear: string,
    cardFirstName: string,
    cardLastName: string,
    cardNumber: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    postCode: string,
    country: string,
    phone: string,
    guardianId: number | undefined,
    teacherId: number | undefined,
    schoolId: number | undefined,
    orderDetailInput: {},
    paymentMethod: string,
    returnUrl: string,
) => `
    createOrder(
        address1: "${address1}",
        address2: "${address2}",
        cardCvc: "${cardCvc}", cardExpMonth: "${cardExpMonth}", cardExpYear: "${cardExpYear}", cardFirstName: "${cardFirstName}", cardLastName: "${cardLastName}", cardNumber: "${cardNumber}", city: "${city}", country: "${country}",
        ${ guardianId ? ('guardianId: ' + guardianId + ','):''}
        ${ teacherId ? ('teacherId: ' + teacherId + ','):''}
        ${ schoolId ? ('schoolId: ' + schoolId + ','):''}
        orderDetailInput: ${orderDetailInput},
        paymentMethod: "${paymentMethod}",
        phone: "${phone}", postCode: "${postCode}", returnUrl: "${returnUrl}", state: "${state}"
        ){
        order{
            ${ORDER}
        }
        status
        urlRedirect
    }
`;
export const CREATE_ORDER_WITH_OUT_PAY = (
    cardFirstName: string,
    cardLastName: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    postCode: string,
    country: string,
    phone: string,
    guardianId: number | null,
    teacherId: number | null,
    schoolId: number | null,
    orderDetailInput: {},
) => `
    createOrderWithOutPay(
        ${ guardianId ? ('guardianId: ' + guardianId + ','):''}
        ${ teacherId ? ('teacherId: ' + teacherId + ','):''}
        ${ schoolId ? ('schoolId: ' + schoolId + ','):''}
        orderDetailInput: ${orderDetailInput},
        ){
        guardian {
            ${GUARDIAN}
        }
        order{
            ${ORDER}
        }
        status
    }
`;

export const CONFIRM_PAYMENT_ORDER = (
    orderId: number,
) => `
    confirmPaymentOrder(orderId: ${orderId}){
        guardian {
            ${GUARDIAN}
        }
        status
        teacher {
            ${_TEACHERSCHEMA}
            paymentMethod {
                ${PAYMENT_METHOD}
            }
        }
        school {
            ${_SCHOOL_SCHEMA}
        }
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
export const FETCH_PAYMENT_METHOD = (
    guardianId: number,
) => `
query {
    guardianById(id: "${guardianId}") {
      paymentMethod {
        ${PAYMENT_METHOD}
      }
    }
  }
`

export const CHANGE_PAYMENT_METHOD_INFO = (
    guardianId: number | string,
    paymentMethodInfo: any,
) => `
mutation {
    changePaymentMethod(
        address1: "${paymentMethodInfo.address1}",
        address2: "${paymentMethodInfo.address2}",
        cardCvc: "${paymentMethodInfo.cardCvc}",
        cardExpMonth: "${paymentMethodInfo.cardExpiryDate.slice(0, 2)}",
        cardExpYear: "${paymentMethodInfo.cardExpiryDate.slice(-2)}",
        cardNumber: "${paymentMethodInfo.cardNumber}",
        city: "${paymentMethodInfo.city}",
        country: "${paymentMethodInfo.country}",
        firstName: "${paymentMethodInfo.firstName}",
        guardianId: "${guardianId}",
        lastName: "${paymentMethodInfo.lastName}",
        phone: "${paymentMethodInfo.phone}",
        method: "CARD",
        postCode: "${paymentMethodInfo.postCode}",
    ) {
        status
    }
  }
`

