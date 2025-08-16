import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  "projectId": "hospital-project-app",
  "appId": "1:525429413937:web:ecc5661f41e7b2e86f5d10",
  "storageBucket": "hospital-project-app.appspot.com",
  "apiKey": "AIzaSyAdU-Oog-oYQYLOoLBtBFLRIg_3nsdLF38",
  "authDomain": "hospital-project-app.firebaseapp.com",
  "messagingSenderId": "525429413937"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

const db = getFirestore(app);

export { db };
