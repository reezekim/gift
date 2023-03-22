import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,  
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
   signInWithPopup(auth, provider)
   .then((result) => {
    const user = result.user;
    console.log(`일반유저: ${user}`);
   })
   .catch(console.error);
}

export async function logout() {
  return signOut(auth).then(()=>null);
}

export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
      const updatedUser = user ? await adminUser(user) : null;
      callback(updatedUser);
    });
  }
  
  async function adminUser(user) {
      return get(ref(database, 'admins')) //
      .then((snapshot) => {
        if (snapshot.exists()) {
          const admins = snapshot.val();
          const isAdmin = admins.includes(user.uid);
          console.log(`어드민유저: ${isAdmin}`);
          return {...user, isAdmin}
        }
        return user;
      });
    }


export async function addNewWork(work, image){
  const id = uuid();
  return set(ref(database, `works/${id}`), {
    ...work,
    id,
    period: parseInt(work.period),
    image,
  })
}

export async function getWorks() {
  return get(ref(database, 'works')).then(snapshot => {
    if(snapshot.exists()){
      return Object.values(snapshot.val());
    }
    return [];
  })
}