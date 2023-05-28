import "./Leaderboard.css"

import { useState, useEffect } from "react"
import { db } from '../../firebaseconfig'
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export const Leaderboard = () => {

    let position = 1;

    let levelData = JSON.parse(localStorage.getItem("lessons"))

    const [leaderboardData, setLeaderboardData] = useState(false);


    useEffect(() => {
        async function fetchData() {
            const querySnapshot = await getDocs(query(collection(db, "users"), orderBy("xp", "desc")));
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
                                        <div className="level">
                                            <img src={levelData[(user.curr_level)-1].text} alt="" />
                                        </div>

                                    </div>

                                )
                            }
                            )
                        }
                    </div >
                </div>
            </div>
            {/* <div className="right_container">
                <div className="info"></div>
                <div className="leaderboard_right_card"></div>
            </div> */}
        </>
    )
}