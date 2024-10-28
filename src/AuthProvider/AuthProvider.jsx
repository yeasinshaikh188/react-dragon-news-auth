import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null); 
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // createUser for Register
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    // sign in 
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password); 
    }

    // logOut 
    const logOut = () =>{
        return signOut(auth);
    }

    // onAuthChanged
    useEffect(() =>{
       const usSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser); 
        })
        return() =>{
            usSubscribe()
        }

    },[])


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }; 

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;