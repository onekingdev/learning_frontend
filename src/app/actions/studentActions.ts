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
