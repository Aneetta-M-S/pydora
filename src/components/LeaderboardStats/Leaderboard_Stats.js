import './Leaderboard_Stats.css'
import First from "../../assets/images/prize/first.png"
import Second from "../../assets/images/prize/second.png"
import Third from "../../assets/images/prize/third.png"
import { Toppers } from './toppers'

export const LeaderboardStats = () => {
    return (
        <div className="leaderboard_stats">
            <div className="leaderboard_stats_top">
                <div className="title">Leaderboard</div>
                <div className="view_btn">View all</div>
            </div>
            <div className="leaderboard_stats_bottom">
                {
                    // need to sort by position
                    Toppers.map( user => {
                        return (
                            <div className="leaderboard_stats_card">
                                <div className="pos">
                                    { (user.position > 3) ? user.position : 
                                        (user.position === 1) ? <img src={First} alt="" /> :
                                            (user.position === 2) ? <img src={Second} alt="" /> : <img src={Third} alt="" />
                                    }
                                </div>
                                <div className="dp">
                                    <img src={ user.dp } alt="" />
                                </div>
                                <div className="name">{ user.name }</div>
                                <div className="xp">{ user.xp } XP</div>
                            </div>
                        )
                    }
                    )
                }
                
            </div>
        </div>
    )
}