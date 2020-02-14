import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkPDKNrFhbJ03NIe9zvQn1lyCSEtQLktM",
    authDomain: "react-app-d8807.firebaseapp.com",
    databaseURL: "https://react-app-d8807.firebaseio.com",
    projectId: "react-app-d8807",
    storageBucket: "react-app-d8807.appspot.com",
    messagingSenderId: "408248158898",
    appId: "1:408248158898:web:c996f0e33bcdeaa03817ab",
    measurementId: "G-6WQJQN50XC"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true});
export default firebase;
