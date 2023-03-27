import { MuiAccordion } from "../../components/MuiAccordion/MuiAccordion"
import { LeaderboardStats } from "../../components/LeaderboardStats/Leaderboard_Stats"
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
                <div className="info"></div>
                <LeaderboardStats />
                <div className="chart"></div>
            </div>
        </>
    )
}