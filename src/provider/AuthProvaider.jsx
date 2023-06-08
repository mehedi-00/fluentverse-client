import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvaider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl,
        });
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser) {
                axios.post(`http://localhost:5000/jwt`, { email: currentUser?.email })
                    .then(data => {
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    });
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });
        return () => {
            return unSubScribe();
        };
    }, []);
    const authInfo = {
        user,
        createUser,
        loading,
        setLoading,
        signInEmailPassword,
        updateUserProfile,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvaider;