import { useState } from 'react';
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/images/logo.png"
import LoginIllustration from "../../assets/images/login.png"

import { auth, provider } from "../../firebaseconfig"
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export const Login = ({setIsAuth}) => {
    const navigate = useNavigate();

    function handleOnClick() {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            localStorage.setItem("user", result.user);
            setIsAuth(true);
            navigate("/learn");
        });
    }

    return (
        <div className="login_page">
            <div className="login_logo">
                <img src={Logo} alt='' />
            </div>
            <div className="login_illustration">
                <img src={LoginIllustration} alt='' />
            </div>
            <div className="login_btn" onClick={handleOnClick}>
                <div className="login_btn_text">
                    <i>
                        <FcGoogle />
                    </i>
                    <span>Continue with Google</span>
                </div>
                <div className="login_btn_shadow"></div>
            </div>
            <div id="Mobile">
                This app is only available in computer devices.
            </div>
        </div>
    )
}

