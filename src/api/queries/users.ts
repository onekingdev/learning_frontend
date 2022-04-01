import { USER, USER_PROFILE, }                          from '../fragments/userFragments';
import { STUDENT }                                      from '../fragments/studentFragments'
import { COIN_WALLET }                                  from '../fragments/coinWalletFragments'
import { PAYMENT_METHOD, GUARDIAN_STUDENT_PLAN, ORDER } from '../fragments/paymentFragments'
import {
    GUARDIAN_STUDENT,
    GUARDIAN,
} from '../fragments/guardianFragments';
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
            guardianstudentSet {
                ${GUARDIAN_STUDENT}
                student {
                    ${STUDENT}
                    user{
                        id
                        username
                        language
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
        profile {
            ${USER_PROFILE}
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
