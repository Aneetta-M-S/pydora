import React, { useState, useEffect, createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const UserContext = createContext({ user: null });

export function UserProvider({ children }) {
    const auth = getAuth();
    const [user, setUser] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                console.log("user: ", user)
                const { displayName, email } = user;
                setUser({
                    displayName,
                    email
                })
            }
        });
    }, []);
    return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    )
}

export default UserProvider