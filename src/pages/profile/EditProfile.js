import "./EditProfile.css"
import { useState, useEffect, useContext } from "react"
import { dpArray } from "./avatars"
// import { db } from "../../firebaseconfig"
// import {collection, addDoc} from 'firebase/firestore';
// import { doc, setDoc } from 'firebase/firestore';

import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router-dom";



export const EditProfile = () => {

    const navigate = useNavigate();
    const { user, userinfo, updateUserinfo } = useContext(AuthContext)

    const [ username, setUsername ] = useState(userinfo ? userinfo.username : "")
    const [ name, setName ] = useState(userinfo ? userinfo.name : "")
    const [ age, setAge ] = useState(userinfo ? userinfo.age : 0)
    const [ dp, setDp ] = useState(userinfo ? userinfo.dp : dpArray[9])
    const [ about, setAbout ] = useState(userinfo ? userinfo.about : "")


    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    function setData() {
        updateUserinfo({
            ...userinfo,
            username,
            name,
            age,
            about,
            dp
        });
        navigate('/learn')
    }


    return (
        <>
            <div className="profile_edit_main_container">
                <div className="top"></div>
                <div className="content">
                    <div className="profile_edit_title">Edit Profile</div>
                    <div className="profile_edit_container">
                        <div className="profile_edit_input">
                            <span>Username</span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="profile_edit_input">
                            <span>Name</span>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="profile_edit_input">
                            <span>Age</span>
                            <input
                                type="text"
                                value={age}
                                onChange={(e) => setAge(Number(e.target.value))}
                            />
                        </div>
                        <div className="profile_edit_input">
                            <span>About</span>
                            <textarea
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile_edit_right_container">
                <div className="info"></div>
                <div className="dp_option">
                    <div className="dp_option_title">Set your profile pic</div>
                    <div className="current_dp">
                        <img src={dp} alt="" />
                    </div>
                    <div className="dp_option_set">
                        {dpArray.map((avatar, index) => {
                            return (
                                <div className={dp === avatar ? "dp_option_item selected_dp" : "dp_option_item"} key={index} onClick={() => setDp(avatar)}>
                                    <img src={avatar} alt="" />
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <div className="save_change_btn" onClick={setData}>
                    <div className="save_change_btn_text">Save Changes</div>
                    <div className="save_change_btn_shadow"></div>
                </div>
            </div>
        </>
    )
}