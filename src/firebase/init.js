const config = {
  apiKey: 'AIzaSyCF0flvqfByw1-hdLsQoTdX5grPfmOvUro',
  authDomain: 'simple-chat-system.firebaseapp.com',
  databaseURL: 'https://simple-chat-system.firebaseio.com',
  projectId: 'simple-chat-system',
  storageBucket: 'simple-chat-system.appspot.com',
  messagingSenderId: '40632517498',
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
