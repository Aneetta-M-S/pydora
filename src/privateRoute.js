import React from "react"
import { Route } from "react-router-dom"
import { useAuth } from "./auth/authHelpers"
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  // const { currentUser } = useAuth()
  
  // function getCookie(cname) {
  //   let name = cname + "=";
  //   let decodedCookie = decodeURIComponent(document.cookie);
  //   let ca = decodedCookie.split(';');
  //   for(let i = 0; i <ca.length; i++) {
  //     let c = ca[i];
  //     while (c.charAt(0) == ' ') {
  //       c = c.substring(1);
  //     }
  //     if (c.indexOf(name) == 0) {
  //       return c.substring(name.length, c.length);
  //     }
  //   }
  //   return "";
  // }

  // let user = getCookie("name");
  let user =localStorage.getItem("user");

  return (
    user ? <Outlet /> : <Navigate to="/sign-in" />
  )
}