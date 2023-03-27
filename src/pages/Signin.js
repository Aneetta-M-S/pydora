import { Button } from "../components/Button";
import value from "../auth/authHelpers";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export const Signin = () => {
    let navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;
    // const { login } = useAuth();

    async function handlelogin() {
        try {
            // document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            await value.Login();
            const d = new Date();
            d.setTime(d.getTime() + (13 * 60 * 1000)); // cookie expires in 13 minutes from now. 
            const expires = "expires=" + d.toUTCString();
            // document.cookie = "name=" + "test" + ";" + expires + ";path=/";
            navigate("/home");
        } catch {
            alert("Failed to log in")
        }
    }

    return (
        <div><button className="login_btn" onClick={handlelogin} style={{height:20,width:100}}>LOGIN</button></div>
    );
}