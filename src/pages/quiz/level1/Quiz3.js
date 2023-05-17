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

export const Quiz3 = () => {

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
    const total_ques = 16
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
        // it must be in the sublevel 3 in order to update 
        if (val >= cutoff && sublevel[level - 1] === 3) {
            // 4 because this level has maximum 4 sublevels
            if (sublevel[level - 1] === 4) {
                level = 2
                if (level <= 10) {
                    sublevel[level - 1] = 1
                }
            }
            else {
                sublevel[level - 1] += 1
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
                    {/* Pharoah Message */}
                    <div className="quiz_content_theory_only">
                        {/* Type in the message, enclose bold texts in '<b></b>' and if line break is required add '<br/><br/>' */}
                        <div className="pharoah_message">
                            <p>There’s a special value that’s neither a string nor a number. <span>True</span>.</p>
                            <p>There are no quotes around it, and it’s not a numeric value.</p>
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

                {/* Question 2 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p><span>True</span> is great for situations like checking if a feature is on or if data is available. We can see it here when we set <span>powered_on</span> to <span>True</span>.</p>
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
                                    <span>powered_on</span>
                                    <input style={{ width: "40px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "70px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["=", "True", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>



                {/* Question  3*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>We can store <span>True</span>in a variable just like a string or a number. Displaying it also works the same, like when we display <span>correct</span>here.</p>
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
                                <p><span>correct = True</span></p>
                                <p>
                                    <span>print(</span>
                                    <input style={{ width: "80px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <span>)</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["correct", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 4 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* Pharoah Message */}
                    <div className="quiz_content_theory_only">
                        {/* Type in the message, enclose bold texts in '<b></b>' and if line break is required add '<br/><br/>' */}
                        <div className="pharoah_message">
                            <p><span>False</span>  is another special value and the opposite of <span>True</span>.</p>
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


                {/* Question  5*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>We can save <span>False</span> in the variable <span>status</span> and display <span>status</span>in the console.</p>
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
                                <p><span>print("Load data")</span></p>
                                <p>
                                    <span>status = </span>
                                    <input style={{ width: "80px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                </p>
                                <p>
                                    <span>print( </span>
                                    <input style={{ width: "80px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <span>)</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["False", "status", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
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
                            <p>What’s a good use for the values <span>True</span> and <span>False</span>?</p>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 1, [1, 0])}>
                                <span>1</span>
                                Showing if a feature is switched on or off.
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 1, [0, 1])}>
                                <span>2</span>
                                Storing values from one to five.
                            </p>
                        </div>

                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question 7 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>Pick the one that’s best for showing a user unsubscribed from a service.</p>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 2, [1, 0])}>
                                <span>1</span>
                                subscribed = True
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 2, [0, 1])}>
                                <span>2</span>
                                subscribed = False
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
                            <p>Why is <span>"False"</span> not the same as <span>False</span>?</p>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 2, [1, 0])}>
                                <span>1</span>
                                "False" and False are the same
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 2, [0, 1])}>
                                <span>2</span>
                                There are quotes around it,so “False” is a string
                            </p>
                        </div>

                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 9 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* Pharoah Message */}
                    <div className="quiz_content_theory_only">
                        {/* Type in the message, enclose bold texts in '<b></b>' and if line break is required add '<br/><br/>' */}
                        <div className="pharoah_message">
                            <p> The code <span>not</span> in front of <span>True</span> makes the expression result in <span>False</span>. If something is not true, it has to be false.</p>
                            <br></br>
                            <p><span>not</span> is the <b>negation operator</b>.It turns values into their <b>opposite.</b></p>
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


                {/* Question  10*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>When we change a value to its opposite with <span>not</span>, we negate it, like here with <span>not True</span>.</p>
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
                                    <input style={{ width: "40px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "80px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />

                                    <span>)</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["not", "True", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question  11*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>The <span>not</span> operator before <span>False</span> changes its value. If a value is not <span>False</span>, it has to be <span>True</span>. We can see it here by displaying <span> not False</span> .</p>
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
                                    <input style={{ width: "40px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "80px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />

                                    <span>)</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["not", "False", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>


                {/* Question  12*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>We can save a whole negation in another variable. Like here <span>is_evening</span> should store the value of <span>not morning</span>.</p>
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
                                <p><span>morning = True</span></p>
                                <p>
                                    <input style={{ width: "100px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "40px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <input style={{ width: "40px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 2)} />
                                    <input style={{ width: "100px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 3)} />
                                </p>
                                <p>print(is_evening)</p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["is_evening", "=", "not", "morning", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
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
                            <p>What does the <span>not</span> operator do?</p>
                        </div>

                        {/* Add the mcq options here */}
                        <div className="quiz_mcq_options">
                            {/* selectOption(option, answer, array):
                             option is the value in the <span></span>
                             answer is the correct option
                             array would be [1,0] for the first option and [0,1] for the second option */}
                            <p className={mcq[0] === 1 ? "selected" : ""} onClick={() => selectOption(1, 2, [1, 0])}>
                                <span>1</span>
                                It checks if values are equal.
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 2, [0, 1])}>
                                <span>2</span>
                                It turns <span>True</span> or <span>False</span> values into their opposite.

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
                            <p>Which value does <span>result</span> store ?</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p> <span>result = not True</span> </p>
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
                                True
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



                {/* Question  15*/}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p> Create a variable <span>is_Available</span>and save the negated value in it.</p>
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
                                <p><span>open_slot = True</span></p>
                                <p>
                                    <input style={{ width: "100px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "40px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <span>not</span>
                                    <input style={{ width: "100px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 2)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["is_Available", "=", "open_slot", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
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