import "./Profile.css"
import { useEffect, useContext } from "react"

import XPImage from '../../assets/images/xp.png'
import Medal from '../../assets/images/unmedal.png'

import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router-dom";



export const Profile = () => {

    const { user, userinfo } = useContext(AuthContext)
    const navigate = useNavigate();

    let levelData = JSON.parse(localStorage.getItem("lessons"))
    
    // show medal cards in profile
    let index = []
    for(let i = 1; i <= 10; i++){
        if (i < userinfo.curr_level){
            index[i-1] = 1
        }
        else{
            index[i-1] = 0
        }
    }
    if (userinfo.curr_level === 10 && userinfo.curr_sl[9] === 5){
        index[9] = 1;
    }

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    function updateData() {
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
                            <img src={userinfo.dp} alt="" />
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
                <div className="profile_page_xp">
                    <div className="user_xp">
                        <img src={XPImage} alt="" />
                        <div>
                            <p>{userinfo.xp}</p>
                            <span>XP Earned</span>
                        </div>
                    </div>
                    <div className="make_change_btn" onClick={updateData}>
                        <div className="make_change_btn_text">Edit Profile</div>
                        <div className="make_change_btn_shadow"></div>
                    </div>
                </div>
                <div className="profile_line"></div>
                <div className="profile_level_container">
                    <div className="profile_level_title">
                        Levels Unlocked
                    </div>
                    <div className="profile_level_card_container">
                        {
                            index.map((i, idx) => {
                                const check = (i===1)
                                return (
                                    (check) ?
                                    (<div className="profile_medal_card" key={idx}>
                                        <div className="profile_medal_card_content">
                                            <div className="profile_medal_card_top">
                                                Island Medallion
                                            </div>
                                            <div className="profile_medal_card_bottom">
                                                <img src={levelData[idx].medal} alt="" />
                                                <span>Congratulations! You have completed this island's quest.</span>
                                            </div>
                                        </div>
                                    </div>)
                                    :
                                    (<div className="profile_medal_card inactive" key={idx}>
                                        <div className="profile_medal_card_content inactive">
                                            <div className="profile_medal_card_top inactive">
                                                Unrevealed Medallion
                                            </div>
                                            <div className="profile_medal_card_bottom inactive">
                                                <img src={Medal} alt="" />
                                                <span>Complete the island quest to view the medallion.</span>
                                            </div>
                                        </div>
                                    </div>)
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}