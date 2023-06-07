import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBI4wXNQ3146xua6YTaKD2tyaw5cOcIkGY",
  authDomain: "test1-4c8e8.firebaseapp.com",
  projectId: "test1-4c8e8",
  storageBucket: "test1-4c8e8.appspot.com",
  messagingSenderId: "485422994822",
  appId: "1:485422994822:web:8ce62d1fd6f8d0e8650807",
  measurementId: "G-77YT3C0PZQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const database = firebase.database();
const storage = firebase.storage();

export { firebase, db,database, storage};

