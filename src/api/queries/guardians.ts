import { GUARDIAN }                   from '../fragments/guardianFragments';
import { _USER, USER_PROFILE }                           from '../fragments/userFragments'
export const GUARDIANS_QUERY = `
    {
        ${GUARDIAN}
    }
`;

export const WHOAMI_QUERY = `
    {
        ${_USER}
        profile {
            ${USER_PROFILE}
        }
    }
`;
