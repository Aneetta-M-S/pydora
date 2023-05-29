import "./ForumMessage.css"
import { useRef, useState } from "react";
import Logo from "../../assets/images/logo.png"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { ForumReply } from "./ForumReply";

export const ForumMessage = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [like, setLike] = useState(false)
    const [likeValue, setLikeValue] = useState(props.user.likes)

    const replyDivRef = useRef();

    function updateLike(val) {
        setLike(val)
        if (val){
            setLikeValue(likeValue + 1)
        }
        else{
            setLikeValue(likeValue - 1)
        }
    }

    return (
        <div className="forum_message">
            <div className="forum_message_top">
                <div className="forum_message_top_left">
                    <div className="forum_message_top_avatar">
                        <img src={props.user.dp} alt="" />
                    </div>
                    <div className="forum_message_top_text">
                        <div className="forum_message_top_name">{props.user.name}</div>
                        <div className="forum_message_top_username">@{props.user.username}</div>
                    </div>
                </div>
                <div className="forum_message_top_right">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="forum_message_content" style={{ whiteSpace: 'pre-line' }}>{props.user.question}</div>
            <div className="forum_message_timestamp">{props.user.time} • {props.user.date} •</div>
            <div className="forum_message_split"></div>
            <div className="forum_message_reactions">
                <div className="forum_message_like" onClick={() => updateLike(!like)}>
                    <i>{like ? <AiFillHeart /> : <AiOutlineHeart />}</i>
                    <span>{likeValue}</span>
                </div>
                <div className="forum_message_comment" onClick={() => setIsOpen(!isOpen)}>
                    <i><BiCommentDetail /></i>
                    <span>{props.user.replies.length} Replies</span>
                </div>
            </div>
            <div 
            className="forum_message_reply_container"
            ref={replyDivRef}
            style={
                {height: isOpen ? replyDivRef.current.scrollHeight + "px" : "0px"}
            }
            >
                <div className="forum_message_reply_container_title">Answers</div>
                <div className="forum_message_reply_container_input">
                    <textarea placeholder="Reply to this questions..."></textarea>
                    <div className="reply_send_btn">Send</div>
                </div>
                {
                    props.user.replies.map((reply, index) => {
                        return (
                            <ForumReply reply={reply} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}