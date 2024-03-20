// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCb-dSh-8ZPxJYZDe0JvXK8LY-Kc9lcbcg',
  authDomain: 'tamain-d0578.firebaseapp.com',
  databaseURL: 'https://tamain-d0578-default-rtdb.firebaseio.com',
  projectId: 'tamain-d0578',
  storageBucket: 'tamain-d0578.appspot.com',
  messagingSenderId: '972519208536',
  appId: '1:972519208536:web:4be96bb0a629c4c3d63c2d',
  measurementId: 'G-9KJ0P63NM9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dateBase = getDatabase(app);
