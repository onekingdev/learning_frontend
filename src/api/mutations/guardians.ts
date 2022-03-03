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

export const CREATE_GUARDIAN = (email: string, username: string, password: string) => `
	createGuardian(email: "${email}", username: "${username}", password: "${password}") {
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
        user {
            ${USER}
        }
        profile {
            ${USER_PROFILE}
        }
        token
        refreshToken
	}
`;
