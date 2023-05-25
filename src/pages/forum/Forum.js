import "../forum/Forum.css"
import Illustration from "../../assets/images/forum.png"

export const Forum = () => {
    return (
        <>
            <div className="forum_main_container">
                <div className="top"></div>
                <div className="forum_title">Forum</div>
                <div className="content">
                    This is the forum
                </div>
            </div>
            <div className="forum_right_container">
                <div>
                    <img src={Illustration} alt="" />
                </div>
            </div>
        </>
    )
}