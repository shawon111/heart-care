import initializeFirebase from "../firebase/firebase.initialize";
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleGoogleSignIn = () => {
        setIsloading(true);
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
            console.log(result.user);
        })
        .finally(() => setIsloading(false));
    };
    
    const handlePasswordSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            // setUser(result.user);
        })
    };
    const handlePasswordSignIn = () => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            // setUser(result.user);
        }).catch((error) => {
            const errorMessage = 'user not found';
            setError(errorMessage);
          })
          .finally(() => setIsloading(false));
    };
    const handleSignOut = () => {
        setIsloading(true);
        signOut(auth).then(()=>{
            setUser({})
        })
        .finally(() => setIsloading(false));
    };
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
        })
        setIsloading(false);
    },[auth]);
    return {
        user, 
        error,
        isLoading,
        handleGoogleSignIn,
        setEmail,
        setPassword,
        handlePasswordSignUp,
        handlePasswordSignIn,
        handleSignOut
    }
}
export default useFirebase;