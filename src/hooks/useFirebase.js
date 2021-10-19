import initializeFirebase from "../firebase/firebase.initialize";
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const githubProvider =new GithubAuthProvider();
    const auth = getAuth();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
            console.log(result.user);
        })
    };
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result=>{
            setUser(result.user)
            console.log(result.user);
        })
    }
    const handlePasswordSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
        })
    };
    const handlePasswordSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user);
        }).catch((error) => {
            const errorMessage = 'user not found';
            setError(errorMessage);
          })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
        })
    },[])
    return {
        user, 
        error,
        handleGoogleSignIn,
        handleGithubSignIn,
        setEmail,
        setPassword,
        handlePasswordSignUp,
        handlePasswordSignIn
    }
}
export default useFirebase;