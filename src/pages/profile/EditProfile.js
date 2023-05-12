import "./EditProfile.css"
import { useState, useEffect, useContext } from "react"
import { dpArray } from "./avatars"
import {db} from "../../firebaseconfig"
// import {collection, addDoc} from 'firebase/firestore';
import {doc, setDoc} from 'firebase/firestore';

import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router-dom";



export const EditProfile = () => {

    const navigate = useNavigate();
    const {user, userinfo, updateUserinfo} = useContext(AuthContext)
    const [tempdp, setTempdp] = useState(userinfo ? userinfo.dp : dpArray[9])

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    function changeDp(avatar){
        setTempdp(avatar)
        updateUserinfo({...userinfo, dp:avatar})
    }

    async function setData(){
        try{
            const docRef = doc(db, "users", user.uid)
            await setDoc(docRef,{
                username : userinfo.username,
                name : userinfo.name,
                dp : userinfo.dp,
                age : userinfo.age,
                about : userinfo.about,
                email: user.email,
                xp: userinfo.xp
            });
            console.log("Success")
            navigate('/learn')
        }
        catch(err){
            console.log(err)
        }
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
                                value={userinfo ? userinfo.username : ""}
                                onChange={(e) => updateUserinfo({...userinfo, username:e.target.value})}
                                />
                        </div>
                        <div className="profile_edit_input">
                            <span>Name</span>
                            <input 
                                type="text"
                                value={userinfo ? userinfo.name : ""}
                                onChange={(e) => updateUserinfo({...userinfo, name:e.target.value})}
                                />
                        </div>
                        <div className="profile_edit_input">
                            <span>Age</span>
                            <input 
                                type="text"
                                value={userinfo ? userinfo.age : 0}
                                onChange={(e) => updateUserinfo({...userinfo, age:Number(e.target.value)})}
                                />
                        </div>
                        <div className="profile_edit_input">
                            <span>About</span>
                            <textarea
                                value={userinfo ? userinfo.about : ""}
                                onChange={(e) => updateUserinfo({...userinfo, about:e.target.value})}
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
                        <img src={tempdp} alt="" />
                    </div>
                    <div className="dp_option_set">
                        {dpArray.map((avatar, index) => {
                            return (
                                <div className={tempdp === avatar ? "dp_option_item selected_dp" : "dp_option_item"} key={index} onClick={() => changeDp(avatar)}>
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