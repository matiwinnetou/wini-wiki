import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDXRI14USehNDjI-KpRln7u5nLTnBlMLYU",
    authDomain: "wiki-1e0b0.firebaseapp.com",
    databaseURL: "https://wiki-1e0b0.firebaseio.com",
    storageBucket: "wiki-1e0b0.appspot.com",
    messagingSenderId: "962926843866"
};

firebase.initializeApp(config);

export {
    config,
    firebase
};