import mutation from '../../api/mutations/get'
import { PLAY_GAME } from '../../api/mutations/game'
import query from '../../api/queries/get'
import { GAMES_QUERY, GAMES_BY_CATEGORY_NAME_QUERY, GAMES_CATEGORY_QUERY } from '../../api/queries/games'
import { INTEREST_QUERY } from '../../api/queries/interests'
import mutationFetch from 'api/mutations/get';
import { CREATE_GUARDIAN, CREATE_ORDER ,UPDATE_EMAIL_PASSWORD } from 'api/mutations/guardians';
import { sendRawQuery } from 'api/queries/get';
import * as TYPES from 'app/types'

export const createGuardian = async (email: string, firstName: string, lastName: string, userName: string, password: string, couponCode: string, dispatch: any) => {
    const res: any = await mutationFetch(
        CREATE_GUARDIAN(email, firstName, lastName, userName, password, couponCode)
    ).catch(() => ({ success: 'false' }));

    if (res.success === false) {
        return { success: false, msg: 'Network Error!' };
    }

    const result: any = await res.json();

    if (result.errors) {
        return { success: false, msg: result.errors[0].message };
    }

    const { guardian, user, token, refreshToken } = result.data.createGuardian;

    dispatch({
        type: TYPES.GUARDIAN_SET_DATA,
        payload: guardian,
    });
    dispatch({
        type: TYPES.USER_SET_DATA,
        payload: { ...user, token: token, refreshToken: refreshToken },
    });

    return { success: true, msg: 'Success', data: result.data }
}

export const doUpdateGuardianEmailPassword = async (email: string, username: string, password: string, token: string) => {
    const res: any = await sendRawQuery(
        UPDATE_EMAIL_PASSWORD(email, username, password),
        token
    );

    return res.msg ? null : res.data.changeGuardianEmailPassword.user;
}

