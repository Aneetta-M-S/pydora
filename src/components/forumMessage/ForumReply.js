import "./ForumReply.css"
import { useState } from "react";

import { AiOutlineLike, AiFillLike } from "react-icons/ai";

export const ForumReply = (props) => {

    const [like, setLike] = useState(false)
    const [likeValue, setLikeValue] = useState(props.reply.likes)

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
        <div className="forum_message_reply">
            <div className="forum_message_reply_top">
                <div className="forum_message_reply_top_avatar">
                    <img src={props.reply.dp} alt="" />
                </div>
                <div className="forum_message_reply_top_text">
                    <div className="forum_message_reply_top_name">{props.reply.name}</div>
                    <div className="forum_message_reply_top_username">@{props.reply.username}</div>
                </div>
                <div className="forum_message_reply_like" onClick={() => updateLike(!like)}>
                    <i>{like ? <AiFillLike /> : <AiOutlineLike />}</i>
                    <span>{likeValue}</span>
                </div>
            </div>
            <div className="forum_message_reply_content" style={{ whiteSpace: 'pre-line' }}>{props.reply.text}</div>
            <div className="forum_message_reply_timestamp">{props.reply.time} • {props.reply.date} •</div>
        </div>

    )
}