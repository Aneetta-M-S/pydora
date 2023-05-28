// change the 2 import files in lines 4, 5 accordingly and export quizname in line 30

import "../Level.css"
import { questions, quizDetails } from './data/data2'
import images from "../bg";

import { useState, forwardRef, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import PyLogo from "../../../assets/images/pylogo.png"
import Congrats from "../../../assets/images/prize/congrats.png"

import { AuthContext } from '../../../contexts/DetailsContext';

import { FaArrowLeft } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { BsFillPlayFill } from "react-icons/bs";

import { Link } from "react-router-dom";

// import Snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// change the export value in the format QuizL1S1 (Level 1, Sublevel 1)
export const QuizL9S2 = () => {

    const divRefs = useRef([])
    const navigate = useNavigate()
    const { userinfo, updateUserinfo } = useContext(AuthContext)

    const [alertinfo, setAlertinfo] = useState({
        open: false,
        msg: "Correct answer",
        severity: "success"
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlertinfo({ ...alertinfo, open: false });
    };


    const total_ques = quizDetails.total_ques
    const cutoff = quizDetails.cutoff
    const [currQuestion, setCurrQuestion] = useState(1)

    // keeps track of questions already done
    const [done, setDone] = useState(Array(total_ques).fill(0))
    const [xp, setXp] = useState(0)

    let level = quizDetails.level
    let current_sublevel = quizDetails.current_sublevel
    let max_sublevel = quizDetails.max_sublevel

    let levelData = JSON.parse(localStorage.getItem("lessons"))
    levelData = levelData[level - 1]

    let bgImage = images[level - 1][current_sublevel - 1]

    // result to dash
    const closeQuiz = (val) => {
        let sublevel = userinfo.curr_sl
        if (val >= cutoff && userinfo.curr_level === level && sublevel[level - 1] === current_sublevel) {
            if (current_sublevel !== max_sublevel) {
                sublevel[level - 1] += 1
            }
            else {
                level += 1
                if (level !== 11) {
                    sublevel[level - 1] = 1
                }
                else {
                    level = 10
                }
            }
        }
        else {
            level = userinfo.curr_level
        }
        val = val + userinfo.xp

        setTimeout(() => {
            updateUserinfo({ ...userinfo, xp: val, curr_level: level, curr_sl: sublevel })
        }, 0);
        navigate('/learn')
    }

    // MCQ parts
    const [mcq, setMcq] = useState([0, 0])
    const selectOption = (opt, ans, arr) => {
        setMcq(arr);

        if (done[currQuestion - 1] === 0) {
            if (opt === ans) {
                updateXp(xp + 10);
                setAlertinfo({
                    open: true,
                    msg: "Correct answer",
                    severity: "success"
                })
            }
            else {
                updateXp(xp + 0);
                setAlertinfo({
                    open: true,
                    msg: "Incorrect answer",
                    severity: "error"
                })
            }
            const temp = [...done]
            temp[currQuestion - 1] += 1
            setDone(temp)
            setTimeout(nextQuestion, 1600);
        }
    }

    // input field data fetch
    let inputvalue = []
    let answer = []

    const updateXp = (val) => {
        setXp(val)
    }

    const checkAnswer = (i, ans) => {
        let check = true
        answer = ans

        // calculate score for each problem
        let score = answer.length * 10

        // setting the input values
        inputvalue = updateInputValue(i)

        // checking if the answer is right
        for (let i = 0; i < inputvalue.length; i++) {
            if (inputvalue[i] !== answer[i]) {
                check = false
                break
            }
        }

        if (done[currQuestion - 1] === 0) {
            if (check) {
                updateXp(xp + score);
                setAlertinfo({
                    open: true,
                    msg: "Correct answer",
                    severity: "success"
                })
            }
            else {
                updateXp(xp + 0);
                setAlertinfo({
                    open: true,
                    msg: "Incorrect answer",
                    severity: "error"
                })
            }
            const temp = [...done]
            temp[currQuestion - 1] += 1
            setDone(temp)
            setTimeout(nextQuestion, 1600);
        }
    }

    // fetching the values within all current input tags
    const updateInputValue = (i) => {
        const inputElements = divRefs.current[i].querySelectorAll('input');
        const inputValues = Array.from(inputElements).map((input) => input.value);
        return inputValues;

    }


    const nextQuestion = () => {
        setCurrQuestion(currQuestion + 1)
        inputvalue = []
        setMcq([0, 0])
    }


    return (
        <div className="quiz_page">
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                style={{ width: "500px" }}
                open={alertinfo.open} autoHideDuration={1500} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertinfo.severity} sx={{ width: '100%', fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, borderRadius: "10px" }}>
                    {alertinfo.msg}
                </Alert>
            </Snackbar>

            <div className="quiz_header">
                <div className="quiz_header_left">
                    <Link to="/learn">
                        <i><FaArrowLeft /></i>
                        <span>Pydora</span>
                    </Link>
                </div>
                <div className="quiz_header_progress">
                    <div className="quiz_header_progress_completed"
                        style={{ width: `${currQuestion * 100 / total_ques}%` }}
                    ></div>
                </div>
                <div className="quiz_header_right">
                    <i><SiBookstack /></i>
                    <span>{quizDetails.topic}</span>
                </div>
                <div className="quiz_island_text">
                    <img src={levelData.text} alt="" />
                </div>
            </div>

            <div className="quiz_section">
                <div className="quiz_bg">
                    <img src={bgImage} alt="" />
                </div>
                {
                    questions.map((ques) => {
                        return (
                            ques.type === "theory" ?
                                (
                                    <div className="quiz_section_content" key={ques.id} style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                                        <div className="quiz_content_theory_only pharoah">
                                            <div className="hero_message">{ques.message}</div>
                                            <div className="hero_illus">
                                                <img src={levelData.hero} alt="" />
                                            </div>
                                        </div>
                                        <div className="next_q_btn" onClick={nextQuestion}>
                                            <div className="next_q_btn_text">Next</div>
                                            <div className="next_q_btn_shadow"></div>
                                        </div>
                                    </div>
                                )
                                :
                                ques.type === "code" ?
                                    (
                                        <div className="quiz_section_content" key={ques.id} style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                                            <div className="quiz_content_ide">
                                                <div className="quiz_content_ide_theory">{ques.theory}</div>
                                                <div className="quiz_ide">
                                                    <div className="quiz_ide_header">
                                                        <img src={PyLogo} alt="" />
                                                        <span>script.py</span>
                                                    </div>
                                                    <div className="quiz_ide_content" ref={(el) => (divRefs.current[ques.code_num] = el)}>
                                                        {ques.ide_content}
                                                    </div>
                                                    <div className="run" onClick={() => checkAnswer(ques.code_num, ques.answer)}> <i><BsFillPlayFill /></i> RUN</div>
                                                </div>
                                            </div>
                                            <div className="next_q_btn" onClick={nextQuestion}>
                                                <div className="next_q_btn_text">Next</div>
                                                <div className="next_q_btn_shadow"></div>
                                            </div>
                                        </div>
                                    )
                                    :
                                    ques.type === "mcq" ?
                                        (
                                            <div className="quiz_section_content" key={ques.id} style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                                                <div className="quiz_content_ide_mcq">
                                                    <div className="quiz_mcq_question">
                                                        {ques.question}
                                                    </div>

                                                    {ques.ide ?
                                                        (
                                                            <div className="quiz_ide">
                                                                <div className="quiz_ide_header">
                                                                    <img src={PyLogo} alt="" />
                                                                    <span>script.py</span>
                                                                </div>
                                                                <div className="quiz_ide_content">
                                                                    {ques.ide_content}
                                                                </div>
                                                            </div>
                                                        )
                                                        :
                                                        (
                                                            <></>
                                                        )
                                                    }
                                                    <div className="quiz_mcq_options">
                                                        <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, ques.answer, [1, 0])}>
                                                            <span>1</span>
                                                            {ques.options[0]}
                                                        </p>
                                                        <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, ques.answer, [0, 1])}>
                                                            <span>2</span>
                                                            {ques.options[1]}
                                                        </p>
                                                    </div>

                                                </div>
                                                <div className="next_q_btn" onClick={nextQuestion}>
                                                    <div className="next_q_btn_text">Next</div>
                                                    <div className="next_q_btn_shadow"></div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <div className="quiz_section_content" key={ques.id} style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                                                <div className="quiz_content_ide">
                                                    <div className="quiz_content_ide_theory">{ques.theory}</div>
                                                    <div className="quiz_ide">
                                                        <div className="quiz_ide_header">
                                                            <img src={PyLogo} alt="" />
                                                            <span>script.py</span>
                                                        </div>
                                                        <div className="quiz_ide_content">
                                                            {ques.ide_content}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="next_q_btn" onClick={nextQuestion}>
                                                    <div className="next_q_btn_text">Next</div>
                                                    <div className="next_q_btn_shadow"></div>
                                                </div>
                                            </div>
                                        )
                        )
                    })
                }


                {/* RESULT */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    <div className="quiz_content_result">
                        {xp >= cutoff ?
                            <img src={Congrats} className="cong" alt="" />
                            :
                            <img src={levelData.villain_text} alt="" />
                        }
                        <div className="quiz_content_result_title">{xp < cutoff ? "Almost there" : "Congratulations"}</div>
                        <p>You have {xp < cutoff ? " only " : " "} earned {xp} XP !</p>

                        {/* On clicking the continue button, xp is updated and we return to home */}
                        <div className="result_btn" onClick={() => closeQuiz(xp)}>
                            <div className="result_btn_text">{xp < cutoff ? "Try Again" : "Continue"}</div>
                            <div className="result_btn_shadow"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}