import {
    GUARDIAN_STUDENT,
    GUARDIAN,
    } from '../fragments/guardianFragments';
import  {
    USER,
    USER_PROFILE
} from '../fragments/userFragments'
export const GUARDIANS_QUERY = `
    {
        ${GUARDIAN}
        user {
            ${USER}
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
