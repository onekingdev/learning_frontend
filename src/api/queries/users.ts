import {_USER, USER_PROFILE} from '../fragments/userFragments';
import {STUDENT} from '../fragments/studentFragments';
import {COIN_WALLET} from '../fragments/coinWalletFragments';

import {GUARDIAN} from '../fragments/guardianFragments';
import {_CLASSROOM_SCHEMA, _TEACHERSCHEMA} from 'api/fragments/teacherFraments';
export const USERS_QUERY = `
    {
        ${_USER}
        profile {
            ${USER_PROFILE}
        }

    }
`;

/**
 * Nameing conventions
 * Full schema will have full name, ex: STUDENT
 * 1 Level Deep Schema, omit 2+ level deep starts with underscore, ex: _USER
 */
export const WHOAMI_QUERY = `
    {
        whoami {
            user {
                ${_USER}
                profile {
                    ${USER_PROFILE}
                }
            }
            student {
                ${STUDENT}
            }
            guardian {
                ${GUARDIAN}
            }
            teacher {
                ${_TEACHERSCHEMA}
                classrooms {
                    ${_CLASSROOM_SCHEMA}
                }
            }
            subscriber {
                id
            }
        }
    }
`;

export const STUDENT_WALLET_QUERY = `
    {
        coinWallet {
            ${COIN_WALLET}
        }
    }
`;
