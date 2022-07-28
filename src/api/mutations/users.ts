import { token } from 'api/fragments/schemas';
import {GUARDIAN} from '../fragments/guardianFragments';
import {_USER, USER_PROFILE} from '../fragments/userFragments';

export const CREATE_GUARDIAN = (
  email: string,
  username: string,
  password: string
) => `
	createGuardian(email: "${email}", username: "${username}", password: "${password}") {
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

export const TOKEN_AUTH = (username: string, password: string) => `
mutation {
    tokenAuth(username: "${username}", password: "${password}") {
        ${token}
    }
}
`;
