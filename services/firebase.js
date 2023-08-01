import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDk7FdTE_7D7vsKs6hhR-06GiQMyzUTaSw",
  authDomain: "hotel-5cd2e.firebaseapp.com",
  projectId: "hotel-5cd2e",
  storageBucket: "hotel-5cd2e.appspot.com",
  messagingSenderId: "179005788483",
  appId: "1:179005788483:web:71a86c7fe39baf728a5ff6",
  measurementId: "G-7NV71S422Z"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();
// Initialize Firebase


const auth=firebase.auth()
const db=firebase.firestore()

export  {firebase,db,auth};
