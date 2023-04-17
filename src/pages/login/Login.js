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
            // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = provider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token)
    const user = result.user;
    console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
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

