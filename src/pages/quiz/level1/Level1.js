import "./Level1.css"
import { useState } from "react";
// import PyLogo from "../../../assets/images/pylogo.png"
import Pharoah from "../../../assets/images/level1/pharoah.png"

import { FaArrowLeft } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

import { Level1_1 } from "./data";

export const Level1 = () => {

    const [currQuestion, setCurrQuestion] = useState(1)

    const prevQuestion = () => {
        setCurrQuestion(currQuestion - 1)
    }

    const nextQuestion = () => {
        setCurrQuestion(currQuestion + 1)
    }

    return (
        <div className="quiz_page">
            <div className="quiz_header">
                <div className="quiz_header_left">
                    <i><FaArrowLeft /></i>
                    <span>Pydora</span>
                </div>
                <div className="quiz_header_progress">
                    <div className="quiz_header_progress_completed"
                        style={{ width: "30%" }}
                    ></div>
                </div>
                <div className="quiz_header_right">
                    <i><SiBookstack /></i>
                    <span>Creating Variables</span>
                </div>

            </div>
            {/* <div className="quiz_content"> */}
            {/* <div className="quiz_content_theory">
                    <p>To create a variable, we need to give it a name. Variable names need to be single words and, therefore, have no spaces.</p>
                    <p>Type the variable name <span>health</span> to get started.</p>
                </div>
                <div className="quiz_ide">
                    <div className="quiz_ide_header">
                        <img src={PyLogo} alt="" />
                        <span>script.py</span>
                    </div>
                    <div className="quiz_ide_content">
                        <p>location = "Temple of Karnak"</p>
                        <p>
                            <input style={{width:"60px"}}/>
                        </p>
                    </div>
                </div> */}
            <div className="quiz_section">
                {
                    Level1_1.map(ques => {
                        return (
                            <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                                <div className="quiz_content_theory_only">
                                    <div className="pharoah_message">{ques.content}</div>
                                    <div className="pharoah_illus">
                                        <img src={Pharoah} alt="" />
                                    </div>
                                    <div className="prev_q_btn" onClick={prevQuestion}>
                                        <div className="prev_q_btn_text">Prev</div>
                                        <div className="prev_q_btn_shadow"></div>
                                    </div>
                                    <div className="next_q_btn" onClick={nextQuestion}>
                                        <div className="next_q_btn_text">Next</div>
                                        <div className="next_q_btn_shadow"></div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>


            {/* </div> */}
        </div>
    )
}