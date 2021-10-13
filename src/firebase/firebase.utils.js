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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    console.log(userRef);
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;