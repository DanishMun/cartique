import { createContext, useContext, useState, useEffect, use } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase.utils"; // Import the Firebase utility function
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user); // Update the current user state
      if (user) {
        createUserDocumentFromAuth(user); // Create a user document in Firestore if user is authenticated
      }
    });
    return unsubscribe; // Clean up the listener on component unmount
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
