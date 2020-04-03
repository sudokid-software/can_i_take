import firebase from 'firebase/app';

export const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBY7RUnBkqWdKBDqaoAyQW6w-3T5nNrbQc",
    authDomain: "can-i-have-62f4b.firebaseapp.com",
    databaseURL: "https://can-i-have-62f4b.firebaseio.com",
    projectId: "can-i-have-62f4b",
    storageBucket: "can-i-have-62f4b.appspot.com",
    messagingSenderId: "470122146819",
    appId: "1:470122146819:web:ef291aed9587e9f2717236",
    measurementId: "G-Y60W401ZVY"
  };

  firebase.initializeApp(firebaseConfig);
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    // await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('Token:', token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
