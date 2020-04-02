importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBY7RUnBkqWdKBDqaoAyQW6w-3T5nNrbQc",
  authDomain: "can-i-have-62f4b.firebaseapp.com",
  databaseURL: "https://can-i-have-62f4b.firebaseio.com",
  projectId: "can-i-have-62f4b",
  storageBucket: "can-i-have-62f4b.appspot.com",
  messagingSenderId: "470122146819",
  appId: "1:470122146819:web:ef291aed9587e9f2717236",
  measurementId: "G-Y60W401ZVY"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function(event) {
  // do what you want
  // ...
});
