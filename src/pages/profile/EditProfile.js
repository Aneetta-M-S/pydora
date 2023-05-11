import "./EditProfile.css"
import { useContext } from "react"
import { dpArray } from "./avatars"
import {db} from "../../firebaseconfig"
// import {collection, addDoc} from 'firebase/firestore';
import {doc, setDoc} from 'firebase/firestore';

import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router-dom";



export const EditProfile = () => {

    const navigate = useNavigate();
    const {user, authname, setAuthname, authusername, setAuthusername, authage, setAuthage, authabout, setAuthabout, authdp, setAuthdp} = useContext(AuthContext)

    function changeDp(avatar){
        setAuthdp(avatar)
    }

    async function setData(){
        try{
            const docRef = doc(db, "users", user.uid)
            await setDoc(docRef,{
                username : authusername,
                name : authname,
                dp : authdp,
                age : authage,
                about : authabout
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
                                value={authusername}
                                onChange={(e) => setAuthusername(e.target.value)}
                            />
                        </div>
                        <div className="profile_edit_input">
                            <span>Name</span>
                            <input 
                                type="text"
                                value={authname}
                                onChange={(e) => setAuthname(e.target.value)}
                            />
                        </div>
                        <div className="profile_edit_input">
                            <span>Age</span>
                            <input 
                                type="text"
                                value={authage}
                                onChange={(e) => setAuthage(Number(e.target.value))}
                            />
                        </div>
                        <div className="profile_edit_input">
                            <span>About</span>
                            <textarea
                                value={authabout}
                                onChange={(e) => setAuthabout(e.target.value)}
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
                        <img src={authdp} alt="" />
                    </div>
                    <div className="dp_option_set">
                        {dpArray.map((avatar, index) => {
                            return (
                                <div className={authdp === avatar ? "dp_option_item selected_dp" : "dp_option_item"} key={index} onClick={() => changeDp(avatar)}>
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