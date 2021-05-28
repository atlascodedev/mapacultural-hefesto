import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebase = app.initializeApp({
  apiKey: "AIzaSyCcuL9Oz6VQQ2wwZL8iotR0oYIK823grBM",
  authDomain: "mapeamento-cultural.firebaseapp.com",
  projectId: "mapeamento-cultural",
  storageBucket: "mapeamento-cultural.appspot.com",
  messagingSenderId: "208899599688",
  appId: "1:208899599688:web:0508cfe20f4ebc13bc577d",
  measurementId: "G-YZ5ZKG3GD0",
});

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const fieldValues = app.firestore.FieldValue;

if (process.env.NODE_ENV !== "production") {
  db.useEmulator("localhost", 8080);

  console.log(
    "Running local instance of Firestore, data will not persist to production database"
  );
}

// db.enablePersistence({
//   synchronizeTabs: true,
// });

export default firebase;
