import { MuiAccordion } from "../../components/MuiAccordion/MuiAccordion"
import { LeaderboardStats } from "../../components/LeaderboardStats/Leaderboard_Stats"
import TempXP from "../../assets/images/temp_xp.png"
import PyLogo from "../../assets/images/pylogo.png"
import Streak from "../../assets/images/streak.png"
import Gem from "../../assets/images/gem.png"
import Avatar from "../../assets/images/avatars/girl4.png"
import "./Dashboard.css"

export const Dashboard = () => {
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
                        <span>0</span>
                    </div>
                    <div className="gem_item">
                        <img src={Gem} alt="" />
                        <span>0</span>
                    </div>
                    <div className="dp_item">
                        <img src={Avatar} alt="" />
                    </div>
                </div>
                <LeaderboardStats />
                <div className="chart">
                    <img src={TempXP} alt="" />
                </div>
            </div>
        </>
    )
}