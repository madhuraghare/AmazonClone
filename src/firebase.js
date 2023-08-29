import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA8QaKvrHTPjBA-cTpy5bhH4TBKoUlrmwc",
  authDomain: "my--clone-ef0b1.firebaseapp.com",
  projectId: "my--clone-ef0b1",
  storageBucket: "my--clone-ef0b1.appspot.com",
  messagingSenderId: "495698369514",
  appId: "1:495698369514:web:ca39403e3215566dac3093",
  measurementId: "G-LDQH2SG1DL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
