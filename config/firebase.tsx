import * as firebase from 'firebase/app';
import 'firebase/auth';
let FireBase: any = {}
if (!firebase.apps.length) {
    FireBase = firebase.initializeApp({
        apiKey: "AIzaSyD7I0yOLIawPyJi4nPxlQKo5fK263etVb4",
        authDomain: "chat-cf89e.firebaseapp.com",
        databaseURL: "https://chat-cf89e.firebaseio.com",
        projectId: "chat-cf89e",
        storageBucket: "chat-cf89e.appspot.com",
        messagingSenderId: "663510244648"
    })
}

export default FireBase