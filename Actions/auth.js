import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { provider } from "../Firebase/firebase";

export const StartLogin = ()=>{
    return()=>{
        return signInWithPopup(getAuth(),provider).then((result)=> console.log(result))
}
};