import {
    USER,
    USER_PROFILE,
    USER_LANGUAGE,
} from '../fragments/userFragments';
import { STUDENT } from '../fragments/studentFragments'
import { GUARDIAN } from '../fragments/guardianFragments'
import { COIN_WALLET } from '../fragments/coinWalletFragments'

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
    }
`;

export const STUDENT_WALLET_QUERY = `
    {
        coinWallet {
            ${COIN_WALLET}
        }
    }
`;
