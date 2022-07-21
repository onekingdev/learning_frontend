import { USER, USER_PROFILE, }                          from '../fragments/userFragments';
import { STUDENT }                                      from '../fragments/studentFragments'
import { COIN_WALLET }                                  from '../fragments/coinWalletFragments'

import {
    GUARDIAN,
} from '../fragments/guardianFragments';
import { _CLASSROOM_SCHEMA, _TEACHERSCHEMA } from 'api/fragments/teacherFraments';
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
        student {
            ${STUDENT}
        }
        guardian {
            ${GUARDIAN}
        }
        profile {
            ${USER_PROFILE}
        }
        schoolpersonnel {
            teacher {
                ${_TEACHERSCHEMA}
                classrooms {
                    ${_CLASSROOM_SCHEMA}
                }
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
