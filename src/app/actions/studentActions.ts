import axios from 'axios';
import * as TYPES from '../types'
import query from '../../api/queries/get'
import {STUDENT_WALLET_QUERY} from '../../api/queries/users'
import {CREATE_STUDENT} from '../../api/mutations/students'
import mutation from '../../api/mutations/get'


export const studentSetData = (payload: any) => {
  return {
      type: TYPES.STUDENT_SET_DATA,
      payload: payload,
  };
};
export const studentGetCollectible = (payload: string) => ({
  type: 'STUDENT_GET_COLLECTIBLE',
  payload,
});

export const studentAnswersBlock = (payload: string) => ({
  type: 'STUDENT_ANSWERS_BLOCK',
  payload,
});

export const studentAnswersQuestion = (payload: string) => ({
  type: 'STUDENT_ANSWERS_QUESTION',
  payload,
});

export const studentAddAvatar = (payload: string) => ({
  type: 'STUDENT_ADD_AVATAR',
  payload,
});

export const studentRemoveAvatar = (payload: string) => ({
  type: 'STUDENT_REMOVE_AVATAR',
  payload,
});

export const studentAuth = (payload: string) => ({
  type: 'STUDENT_AUTH',
  payload,
});

export const studentSelectCard = (payload: string) => ({
  type: 'STUDENT_SELECT_CARD',
  payload,
});

export const studentCloseCard = (payload: string) => ({
  type: 'STUDENT_CLOSE_CARD',
  payload,
});
export const studentSelectTypeGame = (payload: string) => ({
  type: 'STUDENT_SELECT_TYPE_GAME',
  payload,
});

export const studentSelectGame = (payload: string) => ({
  type: 'STUDENT_SELECT_GAME',
  payload,
});

export const studentCloseGame = (payload: string) => ({
  type: 'STUDENT_CLOSE_GAME',
  payload,
});

export const studentSelectTopic = (payload: string) => ({
  type: 'STUDENT_SELECT_TOPIC',
  payload,
});

export const studentConfig = (payload: string) => ({
  type: 'STUDENT_CONFIG',
  payload,
});

export const setCollectibles = (payload: string) => ({
  type: 'SET_COLLECTIBLE',
  payload
})

export const setAreasOfKnowledge = (payload: string) => ({
  type: 'SET_AOK',
  payload
})

export const setBlockPresentation = (payload: string) => ({
  type: 'SET_BLOCK_PRESENTATION',
  payload
})

export const setAvatar = (payload: any, dispatch: any) => {
  axios({
    url: <string>process.env.REACT_APP_SERVER_URL,
    method: 'post',
    data: {
      query: `
      mutation setFavoriteAvatarCollection {
        setFavoriteAvatarCollection(
              avatarAccessorie: ${payload.accessory},
              avatarClothes: ${payload.clothes}, 
              avatarHead: ${payload.head},
              avatarPants: ${payload.pants}
              studentId:1
            ) {
              favoriteAvatarCollection {
                  id
              }
       }
   }
        `
  }
  })
}

export const setCoinWallet = async (studentId: number,token: string, dispatch: any) => {
  const res:any = await query(`studentById(id: "${studentId}")`, STUDENT_WALLET_QUERY, token).catch(e => ({success: false}));

  if(res.success === false) {
      return {success: false, msg: 'Network Error'};
  }

  const result:any = await res.json();

  if(result.errors) {
      return {success: false, msg: result.errors[0].message};
  }
  console.log("coin result is ", result)
  const coinWallet = result.data.studentById.coinWallet
  console.log(coinWallet)
  dispatch({ type: TYPES.EARNING_COIN_SET, payload: coinWallet.balance})
  return {success: true, msg: 'Success!'}
}

export const createStudent = async (
  firstName: string,
  lastName: string,
  username: string,
  password: string,
  guardianStudentPlanId: number,
  listSubjectId: number[],
  studentPlan: number,
  gradeId: number,
  token: string,
  dispatch: any
  ) => {
    const res: any = await mutation(
      CREATE_STUDENT(
        firstName,
        lastName,
        username,
        password,
        guardianStudentPlanId,
        listSubjectId,
        studentPlan,
        gradeId,
      ),
      token
  ).catch(() => ({success: false}));

  if (res.success === false) {
      return {success: false, msg: 'Network Error!'};
  }

  const result: any = await res.json();

  if (result.errors) {
      return {success: false, msg: result.errors[0].message};
  }

  const { guardian, student, user, profile, refreshToken } = result.data.createStudent;

  dispatch({
      type: TYPES.GUARDIAN_SET_DATA,
      payload: guardian,
  });
  // dispatch({
  //     type: TYPES.GUARDIAN_SET_STUDENT,
  //     payload: student || []
  // });
  return {success: true, msg: "Success", data: result.data.createOrder}
}
