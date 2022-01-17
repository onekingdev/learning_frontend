import {initializeApp} from 'firebase/app';
import {getDatabase, set, ref, onValue} from 'firebase/database';
import {getStorage, ref as assetRef, getDownloadURL} from 'firebase/storage';
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

const ranking = ['Tony', 'Emily', 'Albert', 'Viri', 'Candy'];

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

// const storage = getStorage();
// getDownloadURL(assetRef(storage, 'images/stars.jpg'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();

//     // Or inserted into an <img> element
//     const img = document.getElementById('myimg');
//     img.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });

export const getAvatarAsset = (
  directory: string,
  image: string,
  setPhoto: (url: any) => void
) => {
  const storage = getStorage();
  getDownloadURL(assetRef(storage, `assets/avatar/${directory}/${image}`))
    .then(url => {
      console.log("url is", url)
      setPhoto(url)
    })
    .catch(err => {
      console.log('Error in pic getting', err);
    });
};
