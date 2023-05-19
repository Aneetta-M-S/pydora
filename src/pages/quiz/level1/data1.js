import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <b>Python</b> is a fantastic programming language for beginners and experts alike.
            </>
        )
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
                <p>Tap the variable name <span>city</span> to get started.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "40px" }} type="text" />
                </p>
            </>
        ),
        answer: ["city"]

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
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>home</span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>city</span>
                </p>
            </>
        ),
        answer: ["_"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
            <p>To help us understand what’s inside a variable we pick descriptive names.</p>
                            <p><span>hcp</span> or <span>home_city_province</span></p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                                    <input style={{ width: "160px" }} type="text" />
                                </p>
            </>
        ),
        answer: ["home_city_province"]

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
        options: ["name", "\"Karin\""],
        answer: [2]

    },


];


export default questions;

