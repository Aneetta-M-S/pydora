import './Leaderboard_Stats.css'
import First from "../../assets/images/prize/first.png"
import Second from "../../assets/images/prize/second.png"
import Third from "../../assets/images/prize/third.png"
import { Toppers } from './toppers'

export const LeaderboardStats = () => {
    return (
        <div class="leaderboard_stats">
            <div class="leaderboard_stats_top">
                <div class="title">Leaderboard</div>
                <div class="view_btn">View all</div>
            </div>
            <div class="leaderboard_stats_bottom">
                {
                    // need to sort by position
                    Toppers.map( user => {
                        return (
                            <div class="leaderboard_stats_card">
                                <div class="pos">
                                    { (user.position > 3) ? user.position : 
                                        (user.position === 1) ? <img src={First} alt="" /> :
                                            (user.position === 2) ? <img src={Second} alt="" /> : <img src={Third} alt="" />
                                    }
                                </div>
                                <div class="dp">
                                    <img src={ user.dp } alt="" />
                                </div>
                                <div class="name">{ user.name }</div>
                                <div class="xp">{ user.xp } XP</div>
                            </div>
                        )
                    }
                    )
                }
                
            </div>
        </div>
    )
}