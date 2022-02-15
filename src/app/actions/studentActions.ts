import { mutation } from 'api/queries/get';
import axios from 'axios';
import * as TYPES from '../types'
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

export const setAccesoryAvatar = (payload: string, dispatch: any) => {
  axios({
    url: 'https://api.withsocrates.com/graphql/',
    method: 'post',
    data: {
      query: `
      mutation SetAvatar {
        setStudentAvatar(avatarTypeOf:1, studentId:1, avatarUrl: "${payload}") {
           student {
             id
           }
       }
   }
        `,
    },
  }).then(data => dispatch({type: TYPES.AVATAR_SET_ACCESORY, payload: data}));
}

export const setHeadAvatar = (payload: string, dispatch: any) => {
  axios({
    url: 'https://api.withsocrates.com/graphql/',
    method: 'post',
    data: {
      query: `
      mutation SetAvatar {
        setStudentAvatar(avatarTypeOf:2, studentId:1, avatarUrl: "${payload}") {
           student {
             id
           }
       }
   }
        `,
    },
  }).then(data => dispatch({type: TYPES.AVATAR_SET_HEAD, payload: data}));
};

export const setBodyAvatar = (payload: string, dispatch: any) => {
  axios({
    url: 'https://api.withsocrates.com/graphql/',
    method: 'post',
    data: {
      query: `
      mutation SetAvatar {
        setStudentAvatar(avatarTypeOf:3, studentId:1, avatarUrl: "${payload}") {
           student {
             id
           }
       }
   }
        `,
    },
  }).then(data => dispatch({type: TYPES.AVATAR_SET_BODY, payload: data}));
};

export const setFooterAvatar = (payload: string, dispatch: any) => {
  axios({
    url: 'https://api.withsocrates.com/graphql/',
    method: 'post',
    data: {
      query: `
      mutation SetAvatar {
        setStudentAvatar(avatarTypeOf:4, studentId:1, avatarUrl: "${payload}") {
           student {
             id
           }
       }
   }
        `,
    },
  }).then(data => dispatch({type: TYPES.AVATAR_SET_FOOTERS, payload: data}));
};
