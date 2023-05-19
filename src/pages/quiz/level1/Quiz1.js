import "./Level1.css"
import { useState, forwardRef, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import PyLogo from "../../../assets/images/pylogo.png"

import Pharoah from "../../../assets/images/level1/pharoah.png"
import HeadText from "../../../assets/images/level1/text.png"

import Congrats from "../../../assets/images/prize/congrats.png"
import Fail from "../../../assets/images/prize/tryagain.png"

import { AuthContext } from '../../../contexts/DetailsContext';

import { FaArrowLeft } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { BsFillPlayFill } from "react-icons/bs";

import questions from './data1'
import { Link } from "react-router-dom";

// import Snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Quiz1 = () => {

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


    // total questions in sublevel(17 questions and 1 result section)
    const total_ques = 18
    // const total_xp = 200
    const cutoff = 120
    const [currQuestion, setCurrQuestion] = useState(1)
    // keeps track of questions already done
    const [done, setDone] = useState(Array(total_ques).fill(0))
    const [xp, setXp] = useState(0)


    // result to dash
    const closeQuiz = (val) => {
        // type in the current level, current sublevel and max sublevel
        let level = 1
        let current_sublevel = 1
        let max_sublevel = 4
        let sublevel = userinfo.curr_sl
        if (val >= cutoff && userinfo.curr_level === level && sublevel[level - 1] === current_sublevel) {
            if (sublevel !== max_sublevel) {
                sublevel[level - 1] += 1
            }
            else {
                level += 1
                sublevel[level - 1] = 1
            }
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

        let score = 10

        if (done[currQuestion - 1] === 0) {
            if (opt === ans) {
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
            console.log(temp)
            setTimeout(nextQuestion, 1600);
        }
    }

    // input field data fetch
    let divRefs = useRef(null);
    const [inputvalue, setInputvalue] = useState([])
    let answer = []

    const updateXp = (val) => {
        setXp(val)
    }

    const checkAnswer = (i, ans) => {
        let check = true
        answer = ans

        // calculate score for each problem
        let score = 0
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] !== "") {
                score += 10
            }
            else {
                break
            }
        }

        updateInputValue(i)

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
            console.log(temp)
            setTimeout(nextQuestion, 1600);
        }
    }

    const updateInputValue = (i) => {
        console.log(divRefs.current)

    }


    const nextQuestion = () => {
        setCurrQuestion(currQuestion + 1)
        setInputvalue([])
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
                    <span>Creating Variables</span>
                </div>
                <div className="quiz_island_text">
                    <img src={HeadText} alt="" />
                </div>

            </div>

            <div className="quiz_section">
                {
                    questions.map((ques) => {
                        return (
                            ques.type === "theory" ?
                                (
                                    <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                                        <div className="quiz_content_theory_only">
                                            <div className="pharoah_message">{ques.message}</div>
                                            <div className="pharoah_illus">
                                                <img src={Pharoah} alt="" />
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
                                console.log(ques.id)
                                (
                                    <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                                        <div className="quiz_content_ide">
                                            <div className="quiz_content_ide_theory">{ques.theory}</div>
                                            <div className="quiz_ide">
                                                <div className="quiz_ide_header">
                                                    <img src={PyLogo} alt="" />
                                                    <span>script.py</span>
                                                </div>
                                                <div className="quiz_ide_content" ref={divRefs}>
                                                    {ques.ide_content}
                                                </div>
                                                <div className="run" onClick={() => checkAnswer(ques.ide_num, ques.answer)}> <i><BsFillPlayFill /></i> RUN</div>
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
                                    <></>
                                )
                        )
                    })
                }


                {/* RESULT */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_result">
                        <img src={xp < cutoff ? Fail : Congrats} alt="" />
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