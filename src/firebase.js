import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDGIwvdaKtWznnFYojX5fE6pKvAOr0fJf4",
    authDomain: "plandenegocios.firebaseapp.com",
    databaseURL: "https://plandenegocios.firebaseio.com",
    projectId: "plandenegocios",
    storageBucket: "plandenegocios.appspot.com",
    messagingSenderId: "90346120424",
    appId: "1:90346120424:web:975196702de0cfde25555d"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();