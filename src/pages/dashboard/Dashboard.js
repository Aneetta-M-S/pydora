import { MuiAccordion } from "../../components/MuiAccordion/MuiAccordion"
import { LeaderboardStats } from "../../components/LeaderboardStats/Leaderboard_Stats"
import { ChartXP } from "../../components/chart/ChartXP"
import PyLogo from "../../assets/images/pylogo.png"
import Streak from "../../assets/images/streak.png"
import XPImage from '../../assets/images/xp.png'
import "./Dashboard.css"

import { useContext } from "react"
import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router"

export const Dashboard = () => {
    // const { user, userinfo, updateUserinfo } = useContext(AuthContext)
    const { userinfo } = useContext(AuthContext)
    let navigate = useNavigate();

    function goToProfile() {
        navigate('/profile')
    }

    // function formattedDate(date) {
    //     const year = date.getFullYear();
    //     const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    //     const day = date.getDate();

    //     return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

    // }

    // useEffect(() => {
    //     let s = userinfo.streak
    //     let now = new Date(user.lastLoginAt)
    //     now = formattedDate(now)
    //     let yday = new Date(user.lastLoginAt)
    //     yday.setDate(yday.getDate() - 1);
    //     // returns the date format of yesterday
    //     yday = formattedDate(yday)
    //     let lastLoginAt = s.lastLoginAt
    //     if (yday === lastLoginAt) {
    //         s = {
    //             lastLoginAt: now,
    //             streak: userinfo.streak.count + 1
    //         }
    //     }
    //     else if (now !== lastLoginAt) {
    //         s = {
    //             lastLoginAt: now,
    //             streak: 1
    //         }
    //     }
    //     else{
    //         s = userinfo.streak
    //     }
    //     updateUserinfo({
    //         ...userinfo,
    //         streak: s
    //     });
    // }, [user, userinfo, updateUserinfo]);

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
                        <span>1</span>
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