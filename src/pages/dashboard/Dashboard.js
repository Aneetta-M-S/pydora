import { LeaderboardStats } from "../../components/LeaderboardStats/Leaderboard_Stats"
import "./Dashboard.css"

export const Dashboard = () => {
    return (
        <>
            <div class="main_container">
                <div class="top"></div>
                <div class="content">
                    <div class="accordian"></div>
                    <div class="accordian close"></div>
                    <div class="accordian close"></div>
                    <div class="accordian close"></div>
                    <div class="accordian close"></div>
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