import { createContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import {db} from "../firebaseconfig"
import {doc, setDoc} from 'firebase/firestore';

export const AuthContext = createContext(null)

export default function Context({children}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    const [userinfo, setUserinfo] = useState(JSON.parse(localStorage.getItem("userinfo")))

    // const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem("user", (JSON.stringify(user)));
        localStorage.setItem("userinfo", (JSON.stringify(userinfo)));
    }, [user, userinfo]);

    const updateUser = (u) => {
        setUser(u)
        localStorage.setItem("user", JSON.stringify(u))
    }

    const updateUserinfo = async (i) => {
        try{
            setUserinfo(i)
            localStorage.setItem("userinfo", JSON.stringify(i))
            const docRef = doc(db, "users", user.uid)
            await setDoc(docRef, i)
            console.log("Success")
            
        }
        catch(err){
            console.log(err)
        }
    }
    

    const logoutUser = () => {
        localStorage.clear()
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


