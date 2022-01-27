import {
    USER,
    USER_PROFILE,
    } from '../fragments/userFragments';
  
export const USERS_QUERY = `
    {
        ${USER}
        profile {
            ${USER_PROFILE}
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
