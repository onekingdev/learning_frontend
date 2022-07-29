// import mutation from 'api/mutations/get';
import {TOKEN_AUTH} from 'api/mutations/users';
import {sendRawQuery} from 'api/queries/get';
import {WHOAMI_QUERY} from 'api/queries/users';
import {NEXT_LEVEL_QUERY} from 'api/queries/questions';

import * as TYPES from 'app/types';
import {doUpdateUserLanguage} from './studentActions';

export const login = async (
  username: string,
  password: string,
  language: string
) => {
  const tokenAuth = await sendRawQuery(TOKEN_AUTH(username, password));
  if (tokenAuth.msg) return {success: false, message: tokenAuth.msg};
  const {token} = tokenAuth.data.tokenAuth;

  // 🌎Update user language from welcome page, language is selected from language select
  await doUpdateUserLanguage(language, token);

  const result_who: any = await sendRawQuery(WHOAMI_QUERY, token);
  if (result_who.msg) return {success: false, message: result_who.msg};

  return {success: true, data: {...result_who.data.whoami, token}};
};

export const getNextLevel = async (
  currentLevelAmount: number,
  token: string,
  dispatch: any
) => {
  const res: any = await sendRawQuery(
    NEXT_LEVEL_QUERY(currentLevelAmount),
    token
  );
  if (!res.msg) {
    dispatch({
      type: TYPES.STUDENT_SET_NEXT_LEVEL,
      payload: res.data.nextLevelByAmount,
    });
    return res.data.nextLevelByAmount;
  } else return {msg: res.msg};
};

export const resetReducer = async (dispatch: any) => {
  dispatch({type: TYPES.AVATAR_RESET});
  dispatch({type: TYPES.EARNING_RESET});
  dispatch({type: TYPES.GRADE_RESET});
  dispatch({type: TYPES.GUARDIAN_RESET});
  dispatch({type: TYPES.INTEREST_RESET});
  dispatch({type: TYPES.STUDENT_RESET});
  dispatch({type: TYPES.USER_RESET});
  dispatch({type: TYPES.TEACHER_RESET});
  dispatch({type: TYPES.SUBSCRIBER_RESET});
  dispatch({type: TYPES.SCHOOL_RESET});
};
