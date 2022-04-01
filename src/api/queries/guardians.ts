import { GUARDIAN, GUARDIAN_STUDENT }                   from '../fragments/guardianFragments';
import { USER, USER_PROFILE }                           from '../fragments/userFragments'
import { STUDENT }                                      from '../fragments/studentFragments'
import { PAYMENT_METHOD, GUARDIAN_STUDENT_PLAN, ORDER } from '../fragments/paymentFragments'
export const GUARDIANS_QUERY = `
    {
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
`;

export const WHOAMI_QUERY = `
    {
        ${USER}
        profile {
            ${USER_PROFILE}
        }
    }
`;
