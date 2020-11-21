import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyBM7AtWVYcshqqwT1lObZHKLMYJyTgkx2Q",
    authDomain: "reactfirebase-e716a.firebaseapp.com",
    databaseURL: "https://reactfirebase-e716a.firebaseio.com",
    projectId: "reactfirebase-e716a",
    storageBucket: "reactfirebase-e716a.appspot.com",
    messagingSenderId: "572459586365",
    appId: "1:572459586365:web:cc7256b540a36982de2b54",
    measurementId: "G-FB6E3M3LFG"
};

export const Firebase= firebase.initializeApp(firebaseConfig);
export const db=Firebase.firestore();
export const Autenticado=Firebase.auth();
export const Facebook = new firebase.auth.FacebookAuthProvider();
export const Google = new firebase.auth.GoogleAuthProvider();
export const Github= new firebase.auth.GithubAuthProvider();

/*
class FirebaseObject{
    constructor(){
        app.initializeApp(firebaseConfig);
        this.db=app.firestore;
    }
}
export default FirebaseObject;*/