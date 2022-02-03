import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCghUo4USgG4sGmgNyXxCE_ob1WAZAKqaA',
  authDomain: 'cooking-ninja-site-c852f.firebaseapp.com',
  projectId: 'cooking-ninja-site-c852f',
  storageBucket: 'cooking-ninja-site-c852f.appspot.com',
  messagingSenderId: '32467371001',
  appId: '1:32467371001:web:a922c500debdcab5877328',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
