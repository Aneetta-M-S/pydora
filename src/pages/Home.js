import {useContext} from 'react';
import value from "../auth/authHelpers";
import { useState,useEffect } from "react";
import { UserContext } from '../contexts/userContext'; 


export const Home = () => {
    // const { logout } = useAuth();
    const user = useContext(UserContext);

    const [currUser,setUser]=useState();
    
    // useEffect(()=>{
    //     onAuthStateChanged(auth,(user)=> {
    //       if (user) {
    //           localStorage.setItem('user', JSON.stringify(user));
    //           console.log("home: ",user)
    //       }
    //     });
    //   },[]);

    useEffect(()=>{
        console.log("profile: ",JSON.parse(localStorage.getItem("user")).displayName)
      },[]);

    const handleLogout = async () => {
        await value.logout();
        localStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <div>
            <div>Home</div>
            <div>Welcome {user && user.displayName}</div>
            <div><button className="logout_btn" onClick={handleLogout} style={{ height: 20, width: 100 }}>LOGOUT</button></div>
        </div>
    );
}