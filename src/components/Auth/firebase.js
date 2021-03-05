import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC53hZkSkfPUMqh9DGlH0KSfZ2qw0kBy_Y',
  authDomain: 'arithmetictrainer.firebaseapp.com',
  databaseURL: 'https://arithmetictrainer-default-rtdb.firebaseio.com',
  projectId: 'arithmetictrainer',
  storageBucket: 'arithmetictrainer.appspot.com',
  messagingSenderId: '135963225058',
  appId: '1:135963225058:web:1850a80548d3ae428e67bb',
  measurementId: 'G-3VJYC0HK3E',
}
const app = firebase.initializeApp(firebaseConfig)

export default app
