import "./Level1.css"
import { useState, forwardRef, useContext } from "react";
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

import { Link } from "react-router-dom";

// import Snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Quiz4 = () => {

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
    const total_ques = 17
    //  and total xp
    // const total_xp = 210
    const cutoff = 120
    const [currQuestion, setCurrQuestion] = useState(1)
    // keeps track of questions already done
    const [done, setDone] = useState(Array(total_ques).fill(0))
    const [xp, setXp] = useState(0)

    // result to dash
    const closeQuiz = (val) => {
        let level = userinfo.curr_level
        let sublevel = userinfo.curr_sl
        if (val >= cutoff && sublevel[level - 1] === 4) {
            // 4 because this level has maximum 4 sublevels
                level = 2
                if (level <= 10) {
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

    const [inputvalue, setInputvalue] = useState(["", "", "", "", "", "", ""])
    let answer = ["", "", "", "", "", "", ""]

    const updateInputValue = (val, i) => {
        const newInputValues = [...inputvalue];
        newInputValues[i] = val;
        setInputvalue(newInputValues)
    }

    const updateXp = (val) => {
        setXp(val)
    }

    const checkAnswer = (ans) => {
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

    const nextQuestion = () => {
        setCurrQuestion(currQuestion + 1)
        setInputvalue(["", "", "", "", "", "", ""])
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
                    <span>Using Variables</span>
                </div>
                <div className="quiz_island_text">
                    <img src={HeadText} alt="" />
                </div>

            </div>

            <div className="quiz_section">

                {/* Question 1 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>We learned how to crete and store values, but how do we compare them?</p>
                            <p>Like checking if a user’s entered PIN matched their saved PIN</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p><span>entered_pin = 5448</span></p>
                                <p><span>expected_pin = 5440</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question 2 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>To compare if two numbers are the same, we use the <b>equality operator,</b> <span>==</span>.</p>
                        </div>
                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line along with 'input' */}
                            {/* Adjust the width to suit the size of the answer word */}
                            {/* Inside the updateInputValue function the second value is the index which would be 0 for the first input, 1 for the 2nd and so on */}
                            <div className="quiz_ide_content">
                                <p>
                                    <span>5</span>
                                    <input style={{ width: "20px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "20px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <span>5</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["=", "=", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 3 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* Pharoah Message */}
                    <div className="quiz_content_theory_only">
                        {/* Type in the message, enclose bold texts in '<b></b>' and if line break is required add '<br/><br/>' */}
                        <div className="pharoah_message">
                            <p>When comparing, there are only two results: <span><b>True</b></span> or <span><b>False</b></span></p>
                        </div>
                        <div className="pharoah_illus">
                            <img src={Pharoah} alt="" />
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 4*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>When we compare the same numbers with the equality operator, the result is <span>True</span> .</p>
                        </div>
                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line along with 'input' */}
                            {/* Adjust the width to suit the size of the answer word */}
                            {/* Inside the updateInputValue function the second value is the index which would be 0 for the first input, 1 for the 2nd and so on */}
                            <div className="quiz_ide_content">
                                <p>
                                    <span>print( 10 </span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />

                                    <span>)</span>

                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["==", "10", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 5*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>When we compare the different numbers with the equality operator, the result is <span>False</span>. Like here with the <span>9</span> to <span>10</span> comparison.</p>
                            <p><span>9=10</span> or <span>9==10</span>  </p>
                        </div>
                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line along with 'input' */}
                            {/* Adjust the width to suit the size of the answer word */}
                            {/* Inside the updateInputValue function the second value is the index which would be 0 for the first input, 1 for the 2nd and so on */}
                            <div className="quiz_ide_content">
                                <p>
                                    <span>print( </span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />

                                    <span>)</span>

                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["9==10", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question 6 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>What does this code display in the console?</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p> <span>print(10 == 11)</span> </p>
                            </div>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 1, [1, 0])}>
                                <span>1</span>
                                False
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 1, [0, 1])}>
                                <span>2</span>
                                True
                            </p>
                        </div>

                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question 7*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>When might we need to check if two numbers are equal?</p>
                        </div>


                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 1, [1, 0])}>
                                <span>1</span>
                                When checking if a variable is exactly equal to 10

                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 1, [0, 1])}>
                                <span>2</span>
                                When checking if a variable is above 50

                            </p>
                        </div>

                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question 8 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>What does this code display in the console?</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p> <span>print(5 + 13)</span> </p>
                                <p><span>print(5 == 13)</span></p>
                            </div>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 2, [1, 0])}>
                                <span>1</span>
                                18 and then 513
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 2, [0, 1])}>
                                <span>2</span>
                                18 and then False
                            </p>
                        </div>

                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question 9*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>To check if a number isn’t equal to another number, we use the <b>inequality operator</b>,<span>!=</span> .</p>
                        </div>
                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line along with 'input' */}
                            {/* Adjust the width to suit the size of the answer word */}
                            {/* Inside the updateInputValue function the second value is the index which would be 0 for the first input, 1 for the 2nd and so on */}
                            <div className="quiz_ide_content">
                                <p>
                                    <span>print( 1 </span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />

                                    <span> 10 )</span>

                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["!=", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 10*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>We can store the result of a comparison with the inequality operator in a variable like here where we’ll store the comparison <span> 1 != 2</span></p>
                        </div>
                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line along with 'input' */}
                            {/* Adjust the width to suit the size of the answer word */}
                            {/* Inside the updateInputValue function the second value is the index which would be 0 for the first input, 1 for the 2nd and so on */}
                            <div className="quiz_ide_content">
                                <p>
                                    <span>result </span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <span>1</span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <span>2</span>
                                </p>
                                <p><span>print(result)</span></p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["=", "!=", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 11*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>Variables can store the result of equality comparison too, such as <span>result = 1 == 2</span></p>
                        </div>
                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line along with 'input' */}
                            {/* Adjust the width to suit the size of the answer word */}
                            {/* Inside the updateInputValue function the second value is the index which would be 0 for the first input, 1 for the 2nd and so on */}
                            <div className="quiz_ide_content">
                                <p>
                                    <input style={{ width: "90px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <span>1</span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 2)} />
                                    <span>2</span>
                                </p>
                                <p><span>print(result)</span></p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["result", "=", "==", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>



                {/* Question 12 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>What does this code display in the console?</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p> <span>vote_count = 99</span> </p>
                                <p><span>target = vote_count == 100</span></p>
                                <p><span>print(target)</span></p>
                            </div>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 2, [1, 0])}>
                                <span>1</span>
                                "target"
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 2, [0, 1])}>
                                <span>2</span>
                                False
                            </p>
                        </div>

                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question 13 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>What does this code display in the console?</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p> <span>result = 7 != 8</span> </p>
                                <p><span>print(result)</span></p>
                            </div>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 1, [1, 0])}>
                                <span>1</span>
                                True
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 1, [0, 1])}>
                                <span>2</span>
                                False
                            </p>
                        </div>

                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 14 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>What is wrong with this code?</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p> <span>score_one = 100</span> </p>
                                <p><span>score_ two = 80</span></p>
                                <p><span>equal = score_one == score_two</span></p>
                            </div>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 1, [1, 0])}>
                                <span>1</span>
                                Nothing is wrong
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 1, [0, 1])}>
                                <span>2</span>
                                We can’t compare numbers with ==

                            </p>
                        </div>

                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question 15*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>Check if <span>answer</span>equals <span>13</span></p>
                        </div>
                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line along with 'input' */}
                            {/* Adjust the width to suit the size of the answer word */}
                            {/* Inside the updateInputValue function the second value is the index which would be 0 for the first input, 1 for the 2nd and so on */}
                            <div className="quiz_ide_content">
                                <p><span>answer = 16</span></p>
                                <p>
                                    <span>correct_answer</span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <span>answer</span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 2)} />

                                </p>

                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["=", "==", "13", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 16*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>Check if the answer submitted by the user isn't zero letters with <span>!=</span></p>
                        </div>
                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line along with 'input' */}
                            {/* Adjust the width to suit the size of the answer word */}
                            {/* Inside the updateInputValue function the second value is the index which would be 0 for the first input, 1 for the 2nd and so on */}
                            <div className="quiz_ide_content">
                                <p><span>letter = 12</span></p>
                                <p>
                                    <span>valid_answer = letter</span>
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />

                                    <span>0</span>

                                </p>

                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["!=", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>





                {/* RESULT */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_result">
                        {/* Divded by 2 is to show that the cutoff is 50% */}
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
