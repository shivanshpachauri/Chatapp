import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
const config = {
  apiKey: 'AIzaSyAd3MlmqIEO2UyhgDKY_t6C1F5Bg8ff-y0',
  authDomain: 'chat-web-app-8e950.firebaseapp.com',
  databaseURL: 'https://chat-web-app-8e950-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-8e950',
  storageBucket: 'chat-web-app-8e950.appspot.com',
  messagingSenderId: '98572430749',
  appId: '1:98572430749:web:fa6df87b865ac3fa2ed374',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BF4cXTUGPCGwG9NgwOHTZjhzTxK-w85yiQOcNDS0lrln7Kpf8FX-dWIZrVU64QD8MKKoAngN1t5hhGOpYm-Gbc0'
  );

  messaging.onMessage(data => {
    console.log(data);
  });
}
