import { GoogleAuthProvider, signOut, getAuth, signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { provider } from "../Firebase/firebase";

export const StartLogin = ()=>{
    return async ()=>{
        const result = await signInWithPopup(getAuth(), provider);
        return console.log(result);
}
};

export const StartLogOut = ()=> {
    return async ()=>{
        try {
            await signOut(getAuth());
            console.log('Sign Out Succesful');
        } catch (error) {
            console.log('Sign Out Un-Succesful');
        }
    }
}