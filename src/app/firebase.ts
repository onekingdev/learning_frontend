import {initializeApp} from 'firebase/app';
import {getDatabase, set, ref, onValue} from 'firebase/database';
import {
  getStorage,
  ref as assetRef,
  getDownloadURL,
  listAll,
} from 'firebase/storage';
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

export const getProgress = (update: any) => {
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

export const getRanking = (update: any) => {
  const db = getDatabase(app);
  const progressRef = ref(db, 'ranking/test_user');
  onValue(progressRef, snapshot => {
    const data = snapshot.val();
    update(data);
  });
};

export const getAvatarAsset = (directory: any, image: any, setPhoto: any) => {
  const storage = getStorage();
  getDownloadURL(assetRef(storage, `assets/avatar/${directory}/${image}`))
    .then(url => {
      setPhoto(url);
    })
    .catch(err => {
      console.log('Error in pic getting', err);
    });
};

export const getAvatarDir = async (dir: any, setDir: any) => {
  const storage = getStorage();
  const listRef = assetRef(storage, `assets/avatar/${dir}`);
  listAll(listRef).then(res => {
    Promise.all(res.items.map(getDownloadURL)).then(setDir);
  });
};


/**
 * Get image download urls with ids
 * @author BruceLee
 * @param randIds array of numbers
 * @param dir bought category
 * @param setBuyLinks get links of bought cards
 */
export const getBoughtCards = async (
  dir: any,
  setBuyLinks: any,
) => {
  const storage = getStorage();
  const listRef = assetRef(storage, `assets/collectible/${dir}`);
  const res = await listAll(listRef);

  const length = res.items.length
  const randomIds = []
  for(let i = 0; i < 3; i ++)
  randomIds.push(Math.floor(Math.random() * length))

  const links = [];
  for (const row of randomIds) {
    links.push(await getDownloadURL(res.items[row]));
  }

  setBuyLinks(links);
};

/**
 * Card collectible page, when user buys a pack of 3 cards, download files from firebase
 * @author BruceLee
 * @param filenames links from db
 * @param dir directory name in firebase currently bought
 * @param getBoughtCards function to set states with image urls
 */
export const buyCardsWithFilenames = async (
  filenames: Array<string>,
  dir: string,
  getBoughtCards: any
) => {
  const storage = getStorage();
  const links = []

  for (const filename of filenames) {
    const fileRef = assetRef(storage, `assets/collectible/${dir}/${filename}`);
    links.push(await getDownloadURL(fileRef))
  }
  getBoughtCards(links)
};

export const getCardCategories = async (setCateItems: any) => {
  const storage = getStorage();
  const listRef = assetRef(storage, `assets/collectible/Categories`);

  const res = await listAll(listRef);

  const links = [];
  for (const row of res.items) {
    links.push(await getDownloadURL(row));
  }

  setCateItems(links);
};
