import { MuiAccordion } from "../../components/MuiAccordion/MuiAccordion"
import { LeaderboardStats } from "../../components/LeaderboardStats/Leaderboard_Stats"
import { ChartXP } from "../../components/chart/ChartXP"
import PyLogo from "../../assets/images/pylogo.png"
import Streak from "../../assets/images/streak.png"
import XPImage from '../../assets/images/xp.png'
import "./Dashboard.css"

import { useEffect, useContext } from "react"
import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router"

export const Dashboard = () => {
    const {user, userinfo} = useContext(AuthContext)
    let navigate = useNavigate();
    
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    function goToProfile(){
        navigate('/profile')
    }

    return (
        <>
            <div className="main_container">
                <div className="top"></div>
                <div className="content">
                    <MuiAccordion />
                </div>
            </div>
            <div className="right_container">
                <div className="info">
                    <div className="lang">
                        <img src={PyLogo} alt="" />
                    </div>
                    <div className="streak_item">
                        <img src={Streak} alt="" />
                        <span>3</span>
                    </div>
                    <div className="xp_item">
                        <img src={XPImage} alt="" />
                        <span>{userinfo.xp}</span>
                    </div>
                    <div className="dp_item" onClick={goToProfile}>
                        <img src={userinfo && userinfo.dp} alt="" />
                    </div>
                </div>
                <LeaderboardStats />
                <ChartXP />
            </div>
        </>
    )
}