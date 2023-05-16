import { dpArray } from "../profile/avatars"

import './Login.css'
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/images/logo.png"
import LoginIllustration from "../../assets/images/login.png"

import { db, auth, provider } from "../../firebaseconfig"
import { signInWithPopup } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from 'react';

export const Login = () => {
    const { user, userinfo, updateUser, updateUserinfo } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.log("info updated: ", userinfo)
            if (userinfo && userinfo.age === 0)
                navigate('/profile/edit')
            if (userinfo && userinfo.age !== 0)
                navigate('/learn')
        }
    }, [user, userinfo, navigate]);

    useEffect(() => {

    }, [userinfo, navigate]);

    async function redirectLogin(res) {
        const docRef = doc(db, "users", res.uid)
        const documentSnapshot = await getDoc(docRef);
        if (documentSnapshot.exists()) {
            const userData = documentSnapshot.data()
            updateUserinfo({
                ...userinfo,
                name: userData.name,
                username: userData.username,
                age: userData.age,
                dp: userData.dp,
                about: userData.about,
                email: res.email,
                xp: userData.xp
            })
            console.log("after saving to local: ", localStorage.getItem("userinfo"))
            navigate('/learn')
        }
        else {
            updateUserinfo({
                name: "",
                username: "",
                age: 0,
                dp: dpArray[9],
                about: "",
                email: res.email,
                xp: 0,
                curr_level: 1,
                curr_sl: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            })
            // navigate('/profile/edit')
        }
    }

    function handleOnClick() {
        signInWithPopup(auth, provider).then((result) => {
            updateUser(result.user);
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

