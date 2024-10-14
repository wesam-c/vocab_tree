import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import auth from '../firebase'; // Importing auth as default (exported as default in Firebase config)

// Create the AuthContext to be used across the app
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // State to hold the currently authenticated user
    const [currentUser, setCurrentUser] = useState();

    // State to manage the loading state (while checking user authentication)
    const [loading, setLoading] = useState(true);

    // Function to sign up a new user using Firebase
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        return signOut(auth);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // useEffect runs when the component mounts, setting up a listener for auth state changes
    useEffect(() => {
        // Firebase listener that checks if the user is logged in or out
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // Update the currentUser state with the logged-in user
            setCurrentUser(user);

            // Set loading to false once we know the auth state
            setLoading(false);
        });

        // Clean up the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    // Return the context provider with the currentUser and signup function available for consumers
    return (
        <AuthContext.Provider value={{ currentUser, signup, logout, login }}>
            {/* Render children only after the loading state is set to false */}
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};