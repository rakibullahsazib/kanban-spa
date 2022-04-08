import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "../store/userStore";
const userStore = useUserStore()

const auth = getAuth();