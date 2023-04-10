import "./Profile.css"
import Avatar from "../../assets/images/avatars/girl4.png"

export const Profile = () => {
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
                        <img src={Avatar} alt="" />
                    </div>
                    <div className="dp_option_set">
                        <div className="dp_option_item selected_dp">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                            </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="dp_option_item">
                            <img src={Avatar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}