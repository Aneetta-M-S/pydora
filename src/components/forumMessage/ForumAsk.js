import Logo from "../../assets/images/logo.png"

export const ForumAsk = (props) => {
    return (
        <div className="forum_ask">
            <div className="forum_ask_top">
                <div className="forum_ask_top_left">
                    <img src={Logo} alt="" />
                </div>
                <div className="forum_ask_top_right">
                    <div className="forum_ask_top_avatar">
                        <img src={props.userinfo.dp} alt="" />
                    </div>
                    <div className="forum_ask_top_text">
                        <div className="forum_ask_top_name">{props.userinfo.name}</div>
                        <div className="forum_ask_top_username">@{props.userinfo.username}</div>
                    </div>
                </div>
            </div>
            <div className="forum_ask_container_input">
                <textarea placeholder="Ask a doubt..."></textarea>
                <div className="ask_btn">Ask</div>
            </div>
        </div>
    )
}