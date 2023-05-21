import React from "react";

// four types for now: "theory", "code", "mcq" and "theory_ide"

// type "code" :
// remember to keep code_num count starting from 1,2.. 
// store the values in answer array within single quotes, so it would be easier to store string answers
// best method to find the right width would be to use inspect element

// type "mcq" :
// in case there is an ide in mcq type set that value to true, else false
// similar to "code" type set values in options within single quotes
// set the answer value to 1 if right option is first, else 2

// type "theory_ide" :
// this will have the same values as type "code" except it does not need code_num and answer properties

const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <b>Python</b> is a fantastic programming language for beginners and experts alike.
            </>
        ),
    },
    {
        id: 2,
        type: "theory",
        message: (
            <>
                It’s the language of choice for many companies and a popular pick for personal projects.
                <br /><br />
                You can use it for automating tasks,getting ahead in work with data analysis, machine learning and much more.
            </>
        )
    },
    {
        id: 3,
        type: "theory",
        message: (
            <>
                No matter how complex a program is, it begins with a single line of code. This first line is usually a <b>variable</b>.
                <br /><br />
                Program use variables to <b>remember information</b>. Like moving boxes, variable have content and names that tell us what’s inside.
            </>
        )
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>To create a variable, we need to give it a name. Variable names need to be single words and, therefore, have no spaces.</p>
                <p>Type the variable name <span>city</span> to get started.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "40px" }} type="text" />
                </p>
            </>
        ),
        answer: ['city']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>If we want a variable name with multiple words, we use <b>snake case</b>. Snake case means using <span>_</span> to connect the additional words.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>home</span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>city</span>
                </p>
            </>
        ),
        answer: ['_']
    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>To help us understand what’s inside a variable we pick descriptive names.</p>
                <p><span>hcp</span> , <span>home_city_province</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "160px" }} type="text" />
                </p>
            </>
        ),
        answer: ['home_city_province']
    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
                <p>Variable names can contain <b>numbers</b>, too. Adding numbers is useful for multiple similar variables.
                    We’ll create the variable <span>car_1</span> here.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "50px" }} type="text" />
                </p>
            </>
        ),
        answer: ['car_1']
    },
    {
        id: 8,
        type: "code",
        theory: (
            <>
                <p>After creating and naming a variable, we use the <span>=</span> sign to store a value inside it,like with <span>city = “Miami”</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "70px" }} type="text" />
                </p>
            </>
        ),
        answer: ['city', '=', '"Miami"']
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
                <p>The values we've been storing, like <span>"Miami"</span> are <b>strings</b>. Strings are words in double quotes.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "15px" }} type="text" />
                    <span>Miami</span>
                    <input style={{ width: "15px" }} type="text" />
                </p>
            </>
        ),
        answer: ['"', '"']
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>Strings can contain all sorts of letters and symbols,including spaces like <span>“Winter is coming.”</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 7,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "15px" }} />
                    <input style={{ width: "140px" }} />
                    <input style={{ width: "15px" }} />
                </p>
            </>
        ),
        answer: ['"', 'Winter is coming.', '"']
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
                <p>What’s the value of this variable?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>name = "Karin"</span> </p>
            </>
        ),
        options: ['name', '"Karin"'],
        answer: 2
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
                <p>What’s happening in this code?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>measurement = "average"</span> </p>
            </>
        ),
        options: ['The variable measurement stores the value "average"', 'The variable "average" stores the value measurement'],
        answer: 1
    },
    {
        id: 13,
        type: "theory",
        message: (
            <>
                Lines of code are <b>instructions</b> for the computer to follow.
                <br /><br />
                When we run code,we tell the computer to follow the instructions we put together.
            </>
        ),
    },
    {
        id: 14,
        type: "code",
        theory: (
            <>
                <p>The order of the instruction matters because the computer follows the instructions line by line.</p>
                <p>Arrange these lines of code in the correct order, beginning with <span>step_1</span>, followed by <span>step_2</span> and finally <span>step_3</span>.</p>
                <p>Type these in the appropriate order <span>step_1 = "Collect pants"</span>, <span>step_3 = "Profit"</span>, <br /> <span>step_2 = "?"</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 8,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "150px" }} type="text" />
                </p>
                <p>
                    <input style={{ width: "150px" }} type="text" />
                </p>
                <p>
                    <input style={{ width: "150px" }} type="text" />
                </p>
            </>
        ),
        answer: ['step_1 = "Collect pants"', 'step_2 = "?"', 'step_3 = "Profit"']
    },
    {
        id: 15,
        type: "code",
        theory: (
            <>
                <p>With the special instruction <span>print( )</span>, we tell the computer to display a value in an area called the <b>console</b>, also known as the shell.</p>
                <p>Type <span> "Hello, World!"</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 9,
        ide_content: (
            <>
                <p>
                    <span>print(</span>
                    <input style={{ width: "120px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ['"Hello, World!"']
    },
    {
        id: 16,
        type: "code",
        theory: (
            <>
                <p>We can use <span>print( )</span> to display variable like <span>greeting</span>, too.</p>
                <p>Print <span> greeting</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 10,
        ide_content: (
            <>
                <p>
                    <span>greeting = "Hello, World!"</span>
                </p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "75px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ['greeting']
    },
    {
        id: 17,
        type: "code",
        theory: (
            <>
                <p>When we display variables in the console, their values appear instead of their names.
                    If we print <span>name</span> here, it’ll show its value.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 11,
        ide_content: (
            <>
                <p>
                    <span>name = "Daenerys"</span>
                </p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "55px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ['name']
    }
];


export default questions;

