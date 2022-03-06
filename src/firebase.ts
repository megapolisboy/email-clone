import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";
import { Email } from "./features/userSlice";

const firebaseConfig = {
  apiKey: "AIzaSyCn2bVtcWXovQmUauj4rS6f1Q8SsdpSqss",
  authDomain: "email-clone-8eaa7.firebaseapp.com",
  projectId: "email-clone-8eaa7",
  storageBucket: "email-clone-8eaa7.appspot.com",
  messagingSenderId: "359684135060",
  appId: "1:359684135060:web:094dc46fbb16ff54ed3c81",
};

const app = initializeApp(firebaseConfig);

export const signInWithFirebase = async () => {
  let provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
};

export const signOutWithFirebase = () => {
  signOut(getAuth());
};

export const getUserFromFirebase = () => getAuth().currentUser;

export const addEmailToFirebase = async (email: Email) => {
  await addDoc(collection(getFirestore(), "emails"), email);
};

export const getEmailsFromFirebase = async () => {
  const q = query(
    collection(getFirestore(), "emails"),
    orderBy("timestamp", "desc")
  );
  const emailsSnapshot = await getDocs(q);
  const emails: Email[] = [];
  emailsSnapshot.forEach((doc) => {
    emails.push(doc.data() as Email);
  });
  return emails;
};
