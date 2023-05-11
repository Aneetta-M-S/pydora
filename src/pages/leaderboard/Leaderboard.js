import "./Leaderboard.css"
import { Toppers } from '../../components/LeaderboardStats/toppers'

import { useEffect, useContext } from "react"
import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router"

// import { db } from "../../firebaseconfig"
// import { collection, getDocs } from "firebase/firestore"

export const Leaderboard = () => {

    const {user} = useContext(AuthContext)
    let navigate = useNavigate();
    
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);
    
    return (
        <>
            <div className="main_container">
                <div className="top">
                </div>
                <div className="content leaderboard_content">
                    <div className="leaderboard_container_title">
                        Leaderboard
                    </div>
                    <div className="leaderboard_container">
                        {
                            // need to sort by position
                            Toppers.map(user => {
                                return (
                                    <div
                                        className={user.position > 3 ? "leaderboard_main_card" : "leaderboard_main_card leaderboard_main_card_toppers"}
                                        key={user.position}
                                        style={{
                                            backgroundColor: user.position > 3 ? "var(--remain)" :
                                                user.position === 3 ? "var(--third)" :
                                                    user.position === 2 ? "var(--second)" : "var(--first)"
                                        }}>
                                        <div className="pos">
                                            {user.position}
                                        </div>
                                        <div className="name">{user.name}</div>
                                        <div className="xp">{user.xp} XP</div>
                                        <div className="dp">
                                            <img src={user.dp} alt="" />
                                        </div>
                                    </div>

                                )
                            }
                            )
                        }
                    </div >
                </div>
            </div>
            <div className="right_container">
                <div className="info"></div>
                <div className="leaderboard_right_card"></div>
            </div>
        </>
    )
}