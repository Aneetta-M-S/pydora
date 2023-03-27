import './Login.css'
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/images/logo.png"
import LoginIllustration from "../../assets/images/login.png"

export const Login = () => {
    return (
        <div className="login_page">
            <div className="login_logo">
                <img src={Logo} alt='' />
            </div>
            <div className="login_illustration">
                <img src={LoginIllustration} alt='' />
            </div>
            <div className="login_btn">
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

