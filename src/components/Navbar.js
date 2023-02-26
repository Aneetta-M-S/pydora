import { Button } from "./Button";
import Logo from '../assets/images/logo.png';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={ Logo } alt="logo" />
                <div className="logoText">Pydora</div>
            </div>
            <div className="menu">
                <Button className="signup_btn" text="SignUp"/>
                <Button className="login_btn" text="Login"/>
            </div>
        </div>
    );
}