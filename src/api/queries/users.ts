import {_USER, USER_PROFILE} from '../fragments/userFragments';
import {STUDENT} from '../fragments/studentFragments';
import {COIN_WALLET} from '../fragments/coinWalletFragments';

import {GUARDIAN} from '../fragments/guardianFragments';
import {_CLASSROOM_SCHEMA, _TEACHERSCHEMA} from 'api/fragments/teacherFraments';
import { AVATAR } from 'api/fragments/avatarFragments';
import { _GROUP, _STUDENT } from 'api/fragments/peopleFragments';
export const USERS_QUERY = `
    {
        ${_USER}
        profile {
            ${USER_PROFILE}
        }

    }
`;

export const STUDENT_SCHEMA = `
    ${_STUDENT}
    currentAvatarHead {
        ${AVATAR}
    }
    currentAvatarAccessories {
        ${AVATAR}
    }
    currentAvatarClothes {
        ${AVATAR}
    }
    currentAvatarPants {
        ${AVATAR}
    }
    grade {
        grade {
            id
        }
    }
    group {
        id
    }
    user {
        password
        username
    }
`

export const CLASSROOM_SCHEMA = `
${_CLASSROOM_SCHEMA}
audience {
    id
    gradeSet {
        id
        name
    }
}
groupSet {
    ${_GROUP}
    studentSet {
        ${_STUDENT}
    }
}
`

export const TEACHERSCHEMA = `
${_TEACHERSCHEMA}
classrooms {
    ${_CLASSROOM_SCHEMA}
    audience {
        id
        gradeSet {
            id
            name
        }
    }
}
`

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
