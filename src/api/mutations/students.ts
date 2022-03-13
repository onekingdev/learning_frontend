
import  {
    USER,
    USER_PROFILE
} from '../fragments/userFragments'
import {PAYMENT_METHOD ,PLAN, GUARDIAN_STUDENT_PLAN, ORDER_DETAIL, ORDER} from '../fragments/paymentFragments'
import {STUDENT}from '../fragments/studentFragments'
import {
    GUARDIAN_STUDENT,
    GUARDIAN,
    } from '../fragments/guardianFragments';

export const CREATE_STUDENT = (
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    guardianStudentPlanId: number,
    listSubjectId: number[],
    studentPlan: number,
    gradeId: number,
    ) => `
	createStudent(firstName: "${firstName}",  guardianStudentPlanId: ${guardianStudentPlanId}, lastName: "${lastName}", listSubjectId: [${listSubjectId}], password: "${password}", studentPlan: ${studentPlan}, username: "${username}", grade: ${gradeId}) {
        guardian {
            ${GUARDIAN}
            guardianstudentSet {
                ${GUARDIAN_STUDENT}
                student {
                    ${STUDENT}
                    user{
                        id
                        username
                    }
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
        student {
            ${STUDENT}
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

export const CHANGE_STUDENT_GRADE = (
    gradeId: string,
    studentId: string,
    ) => `
	createChangeStudentGrade(gradeId: ${gradeId},  studentId: ${studentId}) {
        guardian {
            ${GUARDIAN}
            guardianstudentSet {
                ${GUARDIAN_STUDENT}
                student {
                    ${STUDENT}
                    user{
                        id
                        username
                    }
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
        student {
            ${STUDENT}
        }
       
	}
`;

