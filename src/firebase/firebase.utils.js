import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCkPWCVhHfcBmFu6IWFlZarQM9mHC7gp0U",
    authDomain: "crwn-db-906bb.firebaseapp.com",
    projectId: "crwn-db-906bb",
    storageBucket: "crwn-db-906bb.appspot.com",
    messagingSenderId: "793945408198",
    appId: "1:793945408198:web:efe0783361c32ee61f4dc7",
    measurementId: "G-SBYP9ZC7Z2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;