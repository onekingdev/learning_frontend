import {GUARDIAN, GUARDIAN_ORDERS} from '../fragments/guardianFragments';
import {_USER, USER_PROFILE} from '../fragments/userFragments';
import {
  GUARDIAN_STUDENT_PLAN,
  ORDER,
  PLAN_RAW,
  AVAILABLE_PLANS,
} from '../fragments/paymentFragments';
import {ORDER_RAW, STUDENT_RAW} from '../fragments/studentFragments';
import {GRADES} from '../fragments/peopleFragments';
import {AVATAR_RAW} from 'api/fragments/avatarFragments';

export const CREATE_GUARDIAN = (
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  couponCode: string,
  language: string
) => `
	createGuardian(email: "${email}", username: "${username}", password: "${password}", coupon: "${couponCode}", lastName: "${lastName}", firstName: "${firstName}", language: "${language}") {
        guardian {
            ${GUARDIAN}
        }
        user {
            ${_USER}
        }
        profile {
            ${USER_PROFILE}
        }
        token
        refreshToken
	}
`;

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
  returnUrl: string
) => `
    createOrder(cardCvc: "${cardCvc}", cardExpMonth: "${cardExpMonth}", cardExpYear: "${cardExpYear}", cardFirstName: "${cardFirstName}", cardLastName: "${cardLastName}", cardNumber: "${cardNumber}", discountCode: "${discountCode}", guardianId: "${guardianId}", orderDetailInput: ${orderDetailInput}, paymentMethod: "${paymentMethod}", returnUrl: "${returnUrl}"){
        order{
            ${ORDER}
        }
        status
        urlRedirect
    }
`;

// For confirming new plan in parent/setting page
export const CONFIRM_PAYMENT_ORDER = (orderId: number) => `
  mutation {
    confirmPaymentOrder(orderId: ${orderId}) {
      order{
        ${ORDER_RAW}
      }
      status
    }
  }
`;

export const CHANGE_PAYMENT_METHOD = (guardianId: number, method: string) => `
    changePaymentMethod(guardianId: ${guardianId}, method: ${method}){
        status
    }
`;

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
`;

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
`;

export const CANCEL_GUARDIAN_STUDENT_PLAN = (
  guardianStudentPlanId: number,
  reason: string
) => `
    cancelGuardianStudentPlan(
        guardianStudentPlanId: ${guardianStudentPlanId},
        reason: "${reason}"
    ) {
        guardianStudentPlan {
            ${GUARDIAN_STUDENT_PLAN}
        }
    }
`;

export const CANCEL_MEMBERSHIP = (guardianId: number, reason: string) => `
mutation{
  cancelMembership(
      guardianId: ${guardianId},
      reason: "${reason}"
  ) {
      status
      guardian {
        ${GUARDIAN_ORDERS}
      }
  }
}
`;

export const UPDATE_EMAIL_PASSWORD = (
  email: string,
  username: string,
  password: string
) => `
mutation {
    changeGuardianEmailPassword(email: "${email}", username: "${username}", password: "${password}"){
      guardian {
        user {
          email
          username
        }
      }
    }
}
`;
export const FETCH_GUARDIAN_AVAILABLE_BOUGHT_PLANS = (guardianId: number) => `
query getActiveGuardianPlan {
    guardianAvailableBroughtPlan(guardianId: "${guardianId}"){
      id,
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
      }
      total
      period
      status
      quantity
      expiredAt
    }
  }
`;

export const CANCEL_GUARDIAN_BOUGHT_PLAN = (
  orderDetailId: string,
  reason: string
) => `
mutation cancelGuardianPlan {
    cancelGuardianPlan(orderDetailId: ${orderDetailId}, reason: "${reason}") {
      status
      guardian {
        ${GUARDIAN_ORDERS}
      }
    }
  }
`;

export const ADD_STUDENT_PLAN_PACKAGE = (
  guardianId: number,
  planId: number,
  period: string // Monthly || Yearly
) => `
mutation AddGuardianPlan {
    addGuardianPlan(
      guardianId: "${guardianId}",
      orderDetailInput: [{planId: ${planId}, quantity: 1, period: "${period}"}],
      returnUrl: "https://www.example.com/", coupon: "ZXC") {
      guardian {
        id
        user {
          username
          email
        }
      }
      order {
        id
        total
        subTotal
        isPaid
        orderdetailSet {
          plan {
            name
          }
        }
      }
      status
    }
  }
`;

export const UPDATE_GUARDIAN_AVAILABLE_BOUGHT_PLAN = (
  guardianId: number,
  orderDetailId: string
) => `
mutation UpdateGuardianPlan {
    updateGuardianPlan(
      guardianId: ${guardianId},
      orderDetailId: ${orderDetailId},
      period: "YEARLY",
      returnUrl: "https://www.example.com/") {
      status
      order {
        id
      }
      urlRedirect
    }
  }
`;

export const CONFIRM_UPDATE_GUARDIAN_PLAN = (orderId: number) => `
mutation {
    confirmUpdateGuardianPlan(orderId: ${orderId}) {
      status
      guardian {
        ${GUARDIAN_ORDERS}
      }
    }
  }
`;

export const FETCH_PLANS = `
query plans {
    plans {
      ${PLAN_RAW}
    }
  }
`;
export const FETCH_GUARDIAN_STUDENTS = (guardianId: number) => `
query {
guardianById(id: "${guardianId}"){
  guardianstudentplanSet{
    id
    student{
      ${STUDENT_RAW}
      currentAvatarHead{
          ${AVATAR_RAW}
      }
      currentAvatarAccessories{
          ${AVATAR_RAW}
      }
      currentAvatarClothes{
          ${AVATAR_RAW}
      }
      currentAvatarPants{
          ${AVATAR_RAW}
      }
      audience {
          gradeSet {
              ${GRADES}
          }
      }
      grade {
          grade{
              ${GRADES}
          }
      }
      user{
          id
          username
          language
      }
    }
  }
}
}
`;

export const FETCH_GUARDIAN_PLANS = (guardianId: number) => `
{
  guardianById(id: "${guardianId}") {
    ${GUARDIAN_ORDERS}
  }
}
`;

export const FETCH_STUDENT_BY_ID = (studentId: number) => `
query {
  studentById (id: "${studentId}"){
    ${STUDENT_RAW}
    currentAvatarHead{
        ${AVATAR_RAW}
    }
    currentAvatarAccessories{
        ${AVATAR_RAW}
    }
    currentAvatarClothes{
        ${AVATAR_RAW}
    }
    currentAvatarPants{
        ${AVATAR_RAW}
    }
    guardianstudentplan {
      subject {
        id
        name
      }
    }
    audience {
        gradeSet {
            ${GRADES}
        }
    }
    areaofknowledgestudentreportSet {
      id
      areaOfKnowledge {
        id
        name
      }
      questionsAnswered
      correctQuestion
      accuracy
    }
    grade {
        grade{
            ${GRADES}
        }
    }
    user{
        id
        username
        language
    }
  }
}
`;
export const FETCH_AVAILABLE_PLANS = (guardianId: number) => `
query {
  guardianById(id: "${guardianId}") {
    ${AVAILABLE_PLANS}
  }
}
`;


