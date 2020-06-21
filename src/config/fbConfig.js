import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';


// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1uFwMs6WTzwwjeOl8LG8vX2sM_ysxwPw",
    authDomain: "react-pms-app.firebaseapp.com",
    databaseURL: "https://react-pms-app.firebaseio.com",
    projectId: "react-pms-app",
    storageBucket: "react-pms-app.appspot.com",
    messagingSenderId: "755769867221",
    appId: "1:755769867221:web:680c1d9db23e152d1ddb5c",
    measurementId: "G-Z0H595HQRM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase;