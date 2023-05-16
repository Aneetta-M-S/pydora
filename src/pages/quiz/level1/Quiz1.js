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

export const Quiz1 = () => {

    const navigate = useNavigate()

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

    const {userinfo, updateUserinfo} = useContext(AuthContext)

    const [currQuestion, setCurrQuestion] = useState(1)
    const [xp, setXp] = useState(0)

    // total questions in sublevel(17 questions and 1 result section)
    const total_ques = 18
    //  and total xp
    const total_xp = 200

    // result to dash
    const closeQuiz = (val) => {
        val = val + userinfo.xp
        setTimeout(() => {
            updateUserinfo({ ...userinfo, xp: val })
        }, 0);
        navigate('/learn')
    }

    // MCQ parts
    const [mcq, setMcq] = useState([0, 0])
    const selectOption = (opt, ans, arr) => {
        setMcq(arr);

        // calculate score for each problem
        let score = 10

        if (opt === ans) {
            console.log("Correct");
            updateXp(xp + score);
            setAlertinfo({
                open: true,
                msg: "Correct answer",
                severity: "success"
            })
        }
        else {
            console.log("Incorrect");
            updateXp(xp + 0);
            setAlertinfo({
                open: true,
                msg: "Incorrect answer",
                severity: "error"
            })
        }
        setTimeout(nextQuestion, 1600);


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
        console.log("Current XP: ", xp)
    }

    const checkAnswer = (ans) => {
        let check = true
        answer = ans
        console.log(inputvalue)
        console.log(answer)

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
        console.log(score)

        // checking if the answer is right
        for (let i = 0; i < inputvalue.length; i++) {
            if (inputvalue[i] !== answer[i]) {
                check = false
                break
            }
        }
        if (check) {
            console.log("Correct");
            updateXp(xp + score);
            setAlertinfo({
                open: true,
                msg: "Correct answer",
                severity: "success"
            })
        }
        else {
            console.log("Incorrect");
            updateXp(xp + 0);
            setAlertinfo({
                open: true,
                msg: "Incorrect answer",
                severity: "error"
            })
        }
        setTimeout(nextQuestion, 1600);
    }

    const nextQuestion = () => {
        setCurrQuestion(currQuestion + 1)
        setInputvalue(["", "", "", "", "", "", ""])
        setMcq([0, 0])
        console.log("Current xp: ", xp)
    }


    return (
        <div className="quiz_page">
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                style={{width: "500px"}}
                open={alertinfo.open} autoHideDuration={1500} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertinfo.severity} sx={{ width: '100%', fontFamily: "'Montserrat', sans-serif", fontSize: 16, fontWeight: 600, borderRadius: "10px"}}>
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
                    <img src={HeadText} alt=""/>
                </div>

            </div>

            <div className="quiz_section">

                {/* Question 1 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* Pharoah Message */}
                    <div className="quiz_content_theory_only">
                        {/* Type in the message, enclose bold texts in '<b></b>' and if line break is required add '<br/><br/>' */}
                        <div className="pharoah_message">
                            <b>Python</b> is a fantastic programming language for beginners and experts alike.
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
                    {/* Pharoah Message */}
                    <div className="quiz_content_theory_only">
                        {/* Type in the message, enclose bold texts in '<b></b>' and if line break is required add '<br/><br/>' */}
                        <div className="pharoah_message">
                            It’s the language of choice for many companies and a popular pick for personal projects.
                            <br /><br />
                            You can use it for automating tasks,getting ahead in work with data analysis, machine learning and much more.
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

                {/* Question 3 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* Pharoah Message */}
                    <div className="quiz_content_theory_only">
                        {/* Type in the message, enclose bold texts in '<b></b>' and if line break is required add '<br/><br/>' */}
                        <div className="pharoah_message">
                            No matter how complex a program is, it begins with a single line of code. This first line is usually a <b>variable</b>.
                            <br /><br />
                            Program use variables to <b>remember information</b>. Like moving boxes, variable have content and names that tell us what’s inside.
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

                {/* Question 4 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>To create a variable, we need to give it a name. Variable names need to be single words and, therefore, have no spaces.</p>
                            <p>Tap the variable name <span>city</span> to get started.</p>
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
                                    <input style={{ width: "40px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["city", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 5 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>If we want a variable name with multiple words, we use <b>snake case</b>. Snake case means using <span>_</span> to connect the additional words.</p>
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
                                    <span>home</span>
                                    <input style={{ width: "20px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <span>city</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["_", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 6 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>To help us understand what’s inside a variable we pick descriptive names.</p>
                            <p><span>hcp</span> or <span>home_city_province</span></p>
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
                                    <input style={{ width: "160px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["home_city_province", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 7 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>Variable names can contain <b>numbers</b>, too. Adding numbers is useful for multiple similar variables.
                                We’ll create the variable <span>car_1</span> here.</p>
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
                                    <input style={{ width: "50px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["car_1", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 8 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>After creating and naming a variable, we use the <span>=</span> sign to store a value inside it,like with <span>city = “Miami”</span>.</p>
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
                                    <input style={{ width: "40px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "20px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <input style={{ width: "70px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 2)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["city", "=", "\"Miami\"", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 9 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>The values we've been storing, like <span>“Miami”</span> are <b>strings</b>. Strings are words in double quotes.</p>
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
                                    <input style={{ width: "15px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <span>Miami</span>
                                    <input style={{ width: "15px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["\"", "\"", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 10 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>Strings can contain all sorts of letters and symbols,including spaces like <span>“Winter is coming.”</span>.</p>
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
                                    <input style={{ width: "15px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <input style={{ width: "140px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                    <input style={{ width: "15px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 2)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["\"", "Winter is coming.", "\"", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 11 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below and two options to choose from */}
                    <div className="quiz_content_ide_mcq">
                        {/* Type each question in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_mcq_question">
                            <p>What’s the value of this variable?</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p> <span>name = "Karin"</span> </p>
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
                                name
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 2, [0, 1])}>
                                <span>2</span>
                                "Karin"
                            </p>
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
                            <p>What’s happening in this code?</p>
                        </div>

                        <div className="quiz_ide">
                            <div className="quiz_ide_header">
                                <img src={PyLogo} alt="" />
                                <span>script.py</span>
                            </div>
                            {/* The content inside IDE. Use 'p' tags for newlines and 'span' for texts on the same line */}
                            <div className="quiz_ide_content">
                                <p> <span>measurement = "average"</span> </p>
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
                                The variable measurement stores the value "average"
                            </p>
                            <p className={mcq[1] === 1 ? "selected" : ""} onClick={() => selectOption(2, 1, [0, 1])}>
                                <span>2</span>
                                The variable "average" stores the value measurement
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
                    {/* Pharoah Message */}
                    <div className="quiz_content_theory_only">
                        {/* Type in the message, enclose bold texts in '<b></b>' and if line break is required add '<br/><br/>' */}
                        <div className="pharoah_message">
                            Lines of code are <b>instructions</b> for the computer to follow.
                            <br /><br />
                            When we run code,we tell the computer to follow the instructions we put together.
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

                {/* Question 14 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>The order of the instruction matters because the computer follows the instructions line by line.</p>
                            <p>Arrange these lines of code in the correct order, beginning with <span>step_1</span>, followed by <span>step_2</span> and finally <span>step_3</span>.</p>
                            <p>Type these in the appropriate order <span>step_1 = "Collect pants"</span>, <span>step_3 = "Profit"</span>, <br /> <span>step_2 = "?"</span>.</p>
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
                                    <input style={{ width: "150px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                </p>
                                <p>
                                    <input style={{ width: "150px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 1)} />
                                </p>
                                <p>
                                    <input style={{ width: "150px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 2)} />
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["step_1 = \"Collect pants\"", "step_2 = \"?\"", "step_3 = \"Profit\"", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 15 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>With the special instruction <span>print( )</span>, we tell the computer to display a value in an area called the <b>console</b>, also known as the shell.</p>
                            <p>Type <span> "Hello, World!"</span></p>
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
                                    <span>print(</span>
                                    <input style={{ width: "120px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <span>)</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["\"Hello, World!\"", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 16 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>We can use <span>print( )</span> to display variable like <span>greeting</span>, too.</p>
                            <p>Print <span> greeting</span></p>
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
                                    <span>greeting = "Hello, World!"</span>
                                </p>
                                <p>
                                    <span>print(</span>
                                    <input style={{ width: "75px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <span>)</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["greeting", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
                        </div>
                    </div>
                    <div className="next_q_btn" onClick={nextQuestion}>
                        <div className="next_q_btn_text">Next</div>
                        <div className="next_q_btn_shadow"></div>
                    </div>
                </div>

                {/* Question 17 */}
                <div className="quiz_section_content" style={{ transform: `translateY(-${(currQuestion - 1) * 100}%)` }}>
                    {/* This consists of a paragraph and an IDE below where the input fields should be filled */}
                    <div className="quiz_content_ide">
                        {/* Type each paragraphs in '<p></p>' and contain highlighted texts within '<span></span>' */}
                        <div className="quiz_content_ide_theory">
                            <p>When we display variables in the console, their values appear instead of their names.
                                If we print <span>name</span> here, it’ll show its value.</p>
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
                                    <span>name = "Daenerys"</span>
                                </p>
                                <p>
                                    <span>print(</span>
                                    <input style={{ width: "55px" }} type="text" onChange={(e) => updateInputValue(e.target.value, 0)} />
                                    <span>)</span>
                                </p>
                            </div>
                            {/* The answer array consists of an array of strings. The one below has only one string since there is only one input*/}
                            <div className="run" onClick={() => checkAnswer(["name", "", "", "", "", "", ""])}> <i><BsFillPlayFill /></i> RUN</div>
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
                        <img src={xp < (total_xp / 2) ? Fail : Congrats} alt=""/>
                        <div className="quiz_content_result_title">{xp < (total_xp / 2) ? "Almost there" : "Congratulations"}</div>
                        <p>You have {xp < (total_xp / 2) ? " only " : " "} earned {xp} XP !</p>

                        {/* On clicking the continue button, xp is updated and we return to home */}
                        <div className="result_btn" onClick={() => closeQuiz(xp)}>
                        <div className="result_btn_text">{xp < (total_xp / 2) ? "Try Again" : "Continue"}</div>
                        <div className="result_btn_shadow"></div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}