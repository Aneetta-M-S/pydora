import "./EditProfile.css"
import { useState } from "react"
import { dpArray } from "./avatars"


export const EditProfile = () => {
    const [dp, setDp] = useState(dpArray[9])

    function changeDp(avatar){
        setDp(avatar)
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
                            <input />
                        </div>
                        <div className="profile_edit_input">
                            <span>Name</span>
                            <input />
                        </div>
                        <div className="profile_edit_input">
                            <span>Age</span>
                            <input />
                        </div>
                        <div className="profile_edit_input">
                            <span>About</span>
                            <textarea />
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
                                <div className={dp === avatar ? "dp_option_item selected_dp" : "dp_option_item"} key={index} onClick={() => changeDp(avatar)}>
                                    <img src={avatar} alt="" />
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <div className="save_change_btn">
                    <div className="save_change_btn_text">Save Changes</div>
                    <div className="save_change_btn_shadow"></div>
                </div>
            </div>
        </>
    )
}