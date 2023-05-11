import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null)

export default function Context({children}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [userinfo, setUserinfo] = useState(JSON.parse(localStorage.getItem("userinfo")))

    useEffect(() => {
        localStorage.setItem("user", (JSON.stringify(user)));
        localStorage.setItem("userinfo", (JSON.stringify(userinfo)));
    }, [user, userinfo]);

    const updateUser = (u) => {
        setUser(u)
        localStorage.setItem("user", JSON.stringify(u))
    }

    const updateUserinfo = (i) => {
        setUserinfo(i)
        localStorage.setItem("userinfo", JSON.stringify(i))
    }

    const logoutUser = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("userinfo")
        // window.location.reload()
        setUser(null)
        setUserinfo(null)
    }

    const value = { user, userinfo, updateUser, updateUserinfo, logoutUser }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


