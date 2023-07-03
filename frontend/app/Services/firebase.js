import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYC1FWws5uwNyxGuweX9HXInnc3G87mS0",
  authDomain: "pbfnext.firebaseapp.com",
  projectId: "pbfnext",
  storageBucket: "pbfnext.appspot.com",
  messagingSenderId: "679429873108",
  appId: "1:679429873108:web:f983ef5f72503be70aca41"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};