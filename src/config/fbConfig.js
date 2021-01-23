import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCOeblX0NCgi2ZyMdd8XMtsqnbdVjR2jxA",
    authDomain: "karen-react-redux-firebase.firebaseapp.com",
    projectId: "karen-react-redux-firebase",
    storageBucket: "karen-react-redux-firebase.appspot.com",
    messagingSenderId: "376405047375",
    appId: "1:376405047375:web:a3b2e9b7250a207ef7d23a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase