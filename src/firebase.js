import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "netflix-clone-3f3c8.firebaseapp.com",
    projectId: "netflix-clone-3f3c8",
    storageBucket: "netflix-clone-3f3c8.appspot.com",
    messagingSenderId: "376535299180",
    appId: "1:376535299180:web:8178c5e3276a45cef8d449"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;

        await addDoc(collection(db, 'user'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        });
    }
    catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split("-").join(' '));
    }
};

export const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split("-").join(' '));
    }
};

export const logout = () => {
    signOut(auth);
};
