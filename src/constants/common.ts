export const USER_AVATAR_SIZE = 70;
export const LESSON_PROGRESS_BAR_HEIGHT = 60;
export const LESSON_PROGRESS_BAR_MOBILE_HEIGHT = 30;
export const TUTORIAL_VDO_URL = 'mGpZkCS_eEg';
export const SCREEN_MOBILE = 425;
export const QUESTION_POINT_UNIT = 10;
export const LANGUAGES = [
  {
    id: 1,
    label: 'English',
    value: 'en-us',
  },
  {
    id: 2,
    label: 'Español',
    value: 'es-mx',
  },
  {
    id: 3,
    label: 'ไทย',
    value: 'th',
  },
];
export const REVIEW_PERIODS = [
  {
    id: 'today',
    label: {
      'en-us': "Today's Answers",
      'es-mx': 'Las respuestas de hoy',
      th: 'คำตอบวันนี้',
    },
    value: {
      period: 1,
      status: 'ALL',
    },
  },
  {
    id: 'recent',
    label: {
      'en-us': 'Recent Answers',
      'es-mx': 'Respuestas recientes',
      th: 'คำตอบล่าสุด',
    },
    value: {
      period: 7,
      status: 'ALL',
    },
  },
  {
    id: 'recent-incorrect',
    label: {
      'en-us': 'Recent Incorrect Answers',
      'es-mx': 'Respuestas incorrectas recientes',
      th: 'คำตอบที่ไม่ถูกต้องล่าสุด',
    },
    value: {
      period: 7,
      status: 'INCORRECT',
    },
  },
];

export enum USER_TYPE {
  teacher = 'TEACHER',
  student = 'STUDENT',
  guardian = 'GUARDIAN',
  noPlans = 'noPlans',
  subscriber = 'SUBSCRIBER',
  adminTeacher = 'ADMINTEACHER',
  user = 'USER',
  manager = 'MANAGER',
}

export enum FONT_FAMILY {
  primary = 'Roboto',
  secondary = "'Quicksand', sans-serif",
}

export const SCHOOL_TYPES = ['PRIVATE', 'CHARTER', 'PUBLIC'];

export const SUBJECT_COLORS = [
  '#EC5858',
  '#CC5B1D',
  '#26B824',
  '#F4C222',
  '#A685E2',
  '#FFCC00',
  '#22BAAF',
];
