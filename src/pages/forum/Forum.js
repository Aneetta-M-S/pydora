import "../forum/Forum.css"
import Illustration from "../../assets/images/forum.png"
import Logo from "../../assets/images/logo.png"

import { useEffect, useContext } from "react"
import { AuthContext } from '../../contexts/DetailsContext';
import { useNavigate } from "react-router"

export const Forum = () => {
    const { user, userinfo } = useContext(AuthContext)

    let navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <>
            <div className="forum_main_container">
                <div className="top"></div>
                <div className="forum_title">Forum</div>
                <div className="content">

                    <div className="forum_ask">
                        <div className="forum_ask_top">
                            <div className="forum_ask_top_left">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="forum_ask_top_right">
                                <div className="forum_ask_top_avatar">
                                    <img src={userinfo.dp} alt="" />
                                </div>
                                <div className="forum_ask_top_text">
                                    <div className="forum_ask_top_name">{userinfo.name}</div>
                                    <div className="forum_ask_top_username">@{userinfo.username}</div>
                                </div>
                            </div>
                        </div>
                        <div className="forum_ask_container_input">
                            <textarea placeholder="Ask a doubt..."></textarea>
                            <div className="ask_btn">Ask</div>
                        </div>
                    </div>
                    <div className="forum_message">
                        <div className="forum_message_top">
                            <div className="forum_message_top_left">
                                <div className="forum_message_top_avatar">
                                    <img src={userinfo.dp} alt="" />
                                </div>
                                <div className="forum_message_top_text">
                                    <div className="forum_message_top_name">{userinfo.name}</div>
                                    <div className="forum_message_top_username">@{userinfo.username}</div>
                                </div>
                            </div>
                            <div className="forum_message_top_right">
                                <img src={Logo} alt="" />
                            </div>
                        </div>
                        <div className="forum_message_content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores non illo, obcaecati minima rerum. Consequatur eligendi omnis debitis, doloremque id facilis illum, corrupti, mollitia cum maiores beatae sint quos.
                        </div>
                        <div className="forum_message_timestamp">8:45 AM • Sep 1, 2022 •</div>
                        <div className="forum_message_split"></div>
                        <div className="forum_message_reactions">
                            <div className="forum_message_like">
                                ❤️ 20 Likes
                            </div>
                            <div className="forum_message_comment">
                                💬 3 Replies
                            </div>
                        </div>
                        <div className="forum_message_reply_container">
                            <div className="forum_message_reply_container_title">Answers</div>
                            <div className="forum_message_reply_container_input">
                                <textarea placeholder="Reply to this questions..."></textarea>
                                <div className="reply_send_btn">Send</div>
                            </div>
                            <div className="forum_message_reply">
                                <div className="forum_message_reply_top">
                                    <div className="forum_message_reply_top_avatar">
                                        <img src={userinfo.dp} alt="" />
                                    </div>
                                    <div className="forum_message_reply_top_text">
                                        <div className="forum_message_reply_top_name">{userinfo.name}</div>
                                        <div className="forum_message_reply_top_username">@{userinfo.username}</div>
                                    </div>
                                </div>
                                <div className="forum_message_reply_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores non illo, obcaecati minima rerum. Consequatur eligendi omnis debitis, doloremque id facilis illum, corrupti, mollitia cum maiores beatae sint quos.
                                </div>
                                <div className="forum_message_reply_timestamp">8:45 AM • Sep 1, 2022 •</div>
                            </div>
                            <div className="forum_message_reply">
                                <div className="forum_message_reply_top">
                                    <div className="forum_message_reply_top_avatar">
                                        <img src={userinfo.dp} alt="" />
                                    </div>
                                    <div className="forum_message_reply_top_text">
                                        <div className="forum_message_reply_top_name">{userinfo.name}</div>
                                        <div className="forum_message_reply_top_username">@{userinfo.username}</div>
                                    </div>
                                </div>
                                <div className="forum_message_reply_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores non illo, obcaecati minima rerum. Consequatur eligendi omnis debitis, doloremque id facilis illum, corrupti, mollitia cum maiores beatae sint quos.
                                </div>
                                <div className="forum_message_reply_timestamp">8:45 AM • Sep 1, 2022 •</div>
                            </div>
                        </div>
                    </div>

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