import "../forum/Forum.css"
import Illustration from "../../assets/images/forum.png"

import { queries } from "./queries"

import { useContext } from "react"
import { AuthContext } from '../../contexts/DetailsContext';
import { ForumMessage } from "../../components/forumMessage/ForumMessage"
import { ForumAsk } from "../../components/forumMessage/ForumAsk"

export const Forum = () => {
    const { userinfo } = useContext(AuthContext)

    return (
        <>
            <div className="forum_main_container">
                <div className="top"></div>
                <div className="forum_title">Forum</div>
                <div className="content">

                    <ForumAsk userinfo={userinfo}/>

                    {
                        queries.map((user, index) => {
                            return (
                                <ForumMessage user={user} key={index}/>
                            )
                        })
                    }

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