import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCwB6JJA-snot5XkwPvRXd8biQXE6Kewzw",
    authDomain: "baithak-3d1dc.firebaseapp.com",
    databaseURL: "https://baithak-3d1dc.firebaseio.com",
    projectId: "baithak-3d1dc",
    storageBucket: "baithak-3d1dc.appspot.com",
    messagingSenderId: "142894398171",
    appId: "1:142894398171:web:ee5d03b95dd43756122afe",
    measurementId: "G-B2SZLJZX1Z"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;