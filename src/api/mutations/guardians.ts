import {
    GUARDIAN_STUDENT,
    GUARDIAN,
    } from '../fragments/guardianFragments';
import  {
    USER,
    USER_PROFILE
} from '../fragments/userFragments'
export const CREATE_GUARDIAN = (email: string, username: string, password: string) => `
	createGuardian(email: "${email}", username: "${username}", password: "${password}") {
        guardian {
            ${GUARDIAN}
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