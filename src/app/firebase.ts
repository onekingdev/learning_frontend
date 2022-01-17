import {initializeApp} from 'firebase/app';
import {getDatabase, set, ref, onValue} from 'firebase/database';
import {BasicColor} from '../views/Color';
import {dictionary} from '../views/pages/Progress/dictionary';

const firebaseConfig = {
  apiKey: 'AIzaSyAdf707dGjrJOLJVuES5V-Reu6RuaJuvug',
  authDomain: 'learningwithsocrates-frontend.firebaseapp.com',
  databaseURL:
    'https://learningwithsocrates-frontend-default-rtdb.firebaseio.com',
  projectId: 'learningwithsocrates-frontend',
  storageBucket: 'learningwithsocrates-frontend.appspot.com',
  messagingSenderId: '1031928174067',
  appId: '1:1031928174067:web:38667d9d54008d41c3ee86',
  measurementId: 'G-SLPK83H4DF',
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

const language = 'en';
const userProgress = [
  {
    title: dictionary[language].ela,
    color: BasicColor.red,
    progress: [
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
    ],
  },
  {
    title: dictionary[language].math,
    color: BasicColor.orange,
    progress: [
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
    ],
  },
  {
    title: dictionary[language].sight,
    color: BasicColor.yellow,
    progress: [
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
    ],
  },
  {
    title: dictionary[language].science,
    color: BasicColor.green,
    progress: [
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      false,
    ],
  },
  {
    title: dictionary[language].health,
    color: BasicColor.aqua,
    progress: [
      false,
      true,
      false,
      false,
      true,
      false,
      false,
      true,
      false,
      true,
    ],
  },
];

const ranking = [
    "Tony",
    "Emily",
    "Albert",
    "Viri",
    "Candy",
  ]

export function writeProgress() {
  const db = getDatabase(app);
  set(ref(db, 'progress/test_user'), userProgress);
}

export const getProgress = (update: Function) => {
  const db = getDatabase(app);
  const progressRef = ref(db, 'progress/test_user');
  onValue(progressRef, snapshot => {
    const data = snapshot.val();
    update(data);
  });
};

export function writeRanking() {
    const db = getDatabase(app);
    set(ref(db, 'ranking/test_user'), ranking);
  }

  export const getRanking = (update: Function) => {
    const db = getDatabase(app);
    const progressRef = ref(db, 'ranking/test_user');
    onValue(progressRef, snapshot => {
      const data = snapshot.val();
      update(data);
    });
  };
