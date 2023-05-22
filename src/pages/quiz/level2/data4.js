import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>Let's learn how to display different kinds of values together in the console with a handy feature known as formatted strings.</p>
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>We've learned that we can use <span>+</span> to add two strings and display them together.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>print ( "new" </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>"messages" )</span>
                </p>
            </>
        ),
        answer: ['+']

    },
    {
        id: 3,
        type: "theory",
        message: (
            <>
                <p>But using <span>+</span> to combine numeric data like <span>2</span> and <span>" new messages"</span> together produces an <b>error</b> as they are different kinds of values.</p>
            </>
        )
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>f-strings, short for formatted strings, allow us to display expression like adding a string to a number, without any error.</p>
                <p><b>Hint:</b> <span>f"&#123;2&#125; new messages"</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>print( </span>
                    <input style={{ width: "180px" }} type="text" />
                    <span>)</span>

                </p>
            </>
        ),
        answer: ['f"{2} new messages"']

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Every f-string statement consists of two parts, first character <span>f</span>, then the string that we want to format.</p>
                <p><b>Hint:</b> output required <span>6 new messages</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>print( </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "170px" }} type="text" />
                    <span>)</span>

                </p>
            </>
        ),
        answer: ['f', '"{6} new messages"']

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>Inserting variable like <span>new_messages</span> between the curly brace displays their value too.</p>
            </>

        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p><span>new_messages = 2</span></p>
                <p>
                    <span>print(f" </span>
                    <input style={{ width: "130px" }} type="text" />

                    <span>new messages")</span>

                </p>
            </>
        ),
        answer: ['{new_messages}']

    },
    {
        id: 7,
        type: "code",
        theory: (
            <p>To reuse an f-string we can save it in a variable, like here with <span>status</span> and <span>f"&#123;new&#125; new messages "</span>.</p>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p><span>new = 5</span></p>
                <p>
                    <input style={{ width: "70px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "190px" }} type="text" />
                </p>
                <p><span>print ( status )</span></p>
            </>
        ),
        answer: ['status', '=', 'f"{new} new messages"']
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What are f-strings for ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ["For displaying just string values together", "For displaying different kinds of values together in a string"],
        answer: 2

    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>How do we recognize an f-string?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ["By the character f in front of the string", "There's no differece between strings and f-strings"],
        answer: 1

    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>How do we display number values with f-strings ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ["We can't display number values with f-strings", "We place them between curly braces,{ }"],
        answer: 2

    },
    {
        id: 11,
        type: "code",
        theory: (

            <p>Code the character <span>f</span> before the formatted string.</p>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p>
                    <span>print ( </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>"popularity inreased by &#123;12&#125;% " )</span>
                </p>
            </>
        ),
        answer: ['f']
    },
];


export default questions;
