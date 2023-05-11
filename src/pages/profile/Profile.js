import "./Profile.css"
import { useEffect, useContext } from "react"

import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router-dom";



export const Profile = () => {

    const {user, userinfo} = useContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

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
                            <img src={userinfo.dp} alt=""/>
                        </div>
                        <div className="username">{userinfo.username}</div>
                    </div>
                    <div className="profile_details">
                        <div className="name">{userinfo.name}</div>
                        <div className="other">
                            <div className="info">
                                <div className="key">Email</div>
                                <div className="value">{userinfo.email}</div>
                            </div>
                            <div className="info">
                                <div className="key">Age</div>
                                <div className="value">{userinfo.age}</div>
                            </div>
                        </div>
                        <div className="about">{userinfo.about}</div>
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