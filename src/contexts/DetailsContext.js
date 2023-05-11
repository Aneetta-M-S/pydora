import { dpArray } from "../pages/profile/avatars"
import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export default function Context({children}) {
    const [user, setUser] = useState(null)

    const [authname, setAuthname] = useState("")
    const [authusername, setAuthusername] = useState("")
    const [authage, setAuthage] = useState(0)
    const [authabout, setAuthabout] = useState("")
    const [authdp, setAuthdp] = useState(dpArray[9])

    return (
        <AuthContext.Provider value={{user, setUser, authname, authusername, authage, authabout, authdp, setAuthname, setAuthusername, setAuthage, setAuthabout, setAuthdp}}>
            {children}
        </AuthContext.Provider>
    )
}