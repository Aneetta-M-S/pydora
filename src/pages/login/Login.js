import './Login.css'
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/images/logo.png"
import LoginIllustration from "../../assets/images/login.png"

import { db, auth, provider } from "../../firebaseconfig"
import { signInWithPopup } from 'firebase/auth';
import {doc, getDoc} from 'firebase/firestore';
import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';

export const Login = () => {
    const {setUser, setAuthname, setAuthusername, setAuthage, setAuthabout, setAuthdp} = useContext(AuthContext);
    const navigate = useNavigate();

    async function redirectLogin(res){
        const docRef = doc(db, "users", res.uid)
        const documentSnapshot = await getDoc(docRef);
        if(documentSnapshot.exists()){
            const userData = documentSnapshot.data()
            setAuthname(userData.name)
            setAuthusername(userData.username)
            setAuthage(userData.age)
            setAuthdp(userData.dp)
            setAuthabout(userData.about)
            navigate('/learn')
        }
        else{
            navigate('/profile/edit')
        }
    }

    function handleOnClick() {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("user", JSON.stringify(result.user));
            setUser(result.user);
            redirectLogin(result.user)
            
        })
        .catch((err) => {
            console.log(err);
        })
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

