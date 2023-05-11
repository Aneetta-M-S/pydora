import "./Profile.css"
import { useContext } from "react"

import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router-dom";



export const Profile = () => {

    const {user, authname, authusername, authage, authabout, authdp} = useContext(AuthContext)
   
    const navigate = useNavigate();

    function updateData(){
        navigate('/profile/edit')
    }


    return (
        <>
            <div className="profile_main_container">
                <div className="top"></div>
                <div className="profile_title">My Profile</div>
                <div className="content">
                    <div className="profile_image">
                        <div className="dp">
                            <img src={authdp} alt=""/>
                        </div>
                        <div className="username">{authusername}</div>
                    </div>
                    <div className="profile_details">
                        <div className="name">{authname}</div>
                        <div className="other">
                            <div className="info">
                                <div className="key">Email</div>
                                <div className="value">{user.email}</div>
                            </div>
                            <div className="info">
                                <div className="key">Age</div>
                                <div className="value">{authage}</div>
                            </div>
                        </div>
                        <div className="about">{authabout}</div>
                    </div>
                </div>
                <div className="make_change_btn" onClick={updateData}>
                    <div className="make_change_btn_text">Edit Profile</div>
                    <div className="make_change_btn_shadow"></div>
                </div>
            </div>
        </>
    )
}