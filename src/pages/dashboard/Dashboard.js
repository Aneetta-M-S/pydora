import { MuiAccordion } from "../../components/MuiAccordion/MuiAccordion"
import { LeaderboardStats } from "../../components/LeaderboardStats/Leaderboard_Stats"
import "./Dashboard.css"

export const Dashboard = () => {
    return (
        <>
            <div class="main_container">
                <div class="top"></div>
                <div class="content">
                    <MuiAccordion />
                </div>
            </div>
            <div class="right_container">
                <div class="info"></div>
                <LeaderboardStats />
                <div class="chart"></div>
            </div>
        </>
    )
}