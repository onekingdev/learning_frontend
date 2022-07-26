
// import { USER, USER_PROFILE }                           from '../fragments/userFragments'
// import { PAYMENT_METHOD, GUARDIAN_STUDENT_PLAN, ORDER } from '../fragments/paymentFragments'
import { STUDENT } from '../fragments/studentFragments'
import {
    // GUARDIAN_STUDENT,
    GUARDIAN,
} from '../fragments/guardianFragments';
import { AVAILABLE_PLANS } from 'api/fragments/paymentFragments';

export const CREATE_STUDENT = (
    audience: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    guardianStudentPlanId: number,
    listSubjectId: number[],
    studentPlan: number,
    gradeId: number,
) => `
	createStudent(audience: ${audience}, firstName: "${firstName}",  guardianStudentPlanId: ${guardianStudentPlanId}, lastName: "${lastName}", listSubjectId: [${listSubjectId}], password: "${password}", studentPlan: ${studentPlan}, username: "${username}", grade: ${gradeId}) {
        guardian {
            ${GUARDIAN}
        }
	}
`;

export const CREATE_STUDENT_PLAN = (
    audience: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    guardianStudentPlanId: number,
    listSubjectId: number[],
    studentPlan: number,
    gradeId: number,
) => `
mutation {
	createStudent(audience: ${audience}, firstName: "${firstName}",  guardianStudentPlanId: ${guardianStudentPlanId}, lastName: "${lastName}", listSubjectId: [${listSubjectId}], password: "${password}", studentPlan: ${studentPlan}, username: "${username}", grade: ${gradeId}) {
        guardian {
            ${AVAILABLE_PLANS}
        }
	}
}
`;

export const CHANGE_STUDENT_GRADE = (
    gradeId: string,
    studentId: string,
) => `
	createChangeStudentGrade(gradeId: ${gradeId},  studentId: ${studentId}) {
        guardian {
            ${GUARDIAN}
        }
        student {
            ${STUDENT}
        }

	}
`;

export const CHANGE_STUDENT_PASSWORD = (
    password: string,
    studentId: string,
) => `
	changeStudentPassword(password: "${password}",  studentId: ${studentId}) {
        guardian {
            ${GUARDIAN}
        }
        student {
            ${STUDENT}
        }
	}
`;

