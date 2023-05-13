import "./Leaderboard.css"

import { useState, useEffect, useContext } from "react"
import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router"
import { db } from '../../firebaseconfig'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

// import { db } from "../../firebaseconfig"
// import { collection, getDocs } from "firebase/firestore"

export const Leaderboard = () => {

    const {user} = useContext(AuthContext)
    let navigate = useNavigate();

    let position = 1;
    const [leaderboardData, setLeaderboardData] = useState(false);
    
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(query(collection(db, "users"), orderBy("xp", "desc"), limit(10)));
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
            setLeaderboardData(newData);
        }
        fetchData();
    }, []);
    
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
                            leaderboardData && leaderboardData.map(user => {
                                return (
                                    <div
                                        className={position > 3 ? "leaderboard_main_card" : "leaderboard_main_card leaderboard_main_card_toppers"}
                                        key={position}
                                        style={{
                                            backgroundColor: position > 3 ? "var(--remain)" :
                                                position === 3 ? "var(--third)" :
                                                    position === 2 ? "var(--second)" : "var(--first)"
                                        }}>
                                        <div className="pos">
                                            {position++}
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