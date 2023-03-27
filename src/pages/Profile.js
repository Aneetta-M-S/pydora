import { useState, useEffect, useContext } from "react";
import { UserContext } from '../contexts/userContext';

export const Profile = () => {
    const user = useContext(UserContext)
    useEffect(()=>{
        console.log("profile: ",user)
      },[user]);
    return (
        <div>Profile{user && user.displayName}</div>
    );
}