import firebase from 'firebase/app';
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // Firebase project config from Project settings > General > Your apps > Firebase SDK snippet.
  apiKey: "AIzaSyCJRxMhYTuQk7SMdQBH7pNSq5FaIn6DR8Q",
  authDomain: "farmfolio-2a11a.firebaseapp.com",
  projectId: "farmfolio-2a11a",
  storageBucket: "farmfolio-2a11a.appspot.com",
  messagingSenderId: "59897684350",
  appId: "1:59897684350:web:03122ca3427008f7a2132f",
  measurementId: "G-FNG692HQ8E"
};

firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
