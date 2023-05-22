import React from "react";


const questions = [
    {
        id: 1,
        type: "theory_ide",
        theory: (
            <>
                <p>We learned how to crete and store values, but how do we compare them?</p>
                <p>Like checking if a user’s entered PIN matched their saved PIN</p>            </>
        ),
        ide_content: (
            <>
                <p><span>entered_pin = 5448</span></p>
                <p><span>expected_pin = 5440</span></p>
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>To compare if two numbers are the same, we use the <b>equality operator,</b> <span>==</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>5</span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <span>5</span>
                </p>
            </>
        ),
        answer: ["=", "="]

    },
    {
        id: 3,
        type: "theory",
        message: (
            <>
                <p>When comparing, there are only two results: <span><b>True</b></span> or <span><b>False</b></span></p>

            </>
        )
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>When we compare the same numbers with the equality operator, the result is <span>True</span> .</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>print( 10 </span>
                    <input style={{ width: "50px" }} type="text" />
                    <input style={{ width: "50px" }} type="text" />

                    <span> )</span>

                </p>
            </>
        ),
        answer: ["==", "10"]

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>When we compare the different numbers with the equality operator, the result is <span>False</span>. Like here with the <span>9</span> to <span>10</span> comparison.</p>
                <p><span>9=10</span> or <span>9==10</span>  </p>            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>print( </span>
                    <input style={{ width: "50px" }} type="text" />

                    <span>)</span>

                </p>
            </>
        ),
        answer: ["9==10"]

    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>What does this code display in the console?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>print(10 == 11)</span> </p>
            </>
        ),
        options: ["False", "True"],
        answer: 1

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>When might we need to check if two numbers are equal?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: [" When checking if a variable is exactly equal to 10", " When checking if a variable is above 50"],
        answer: 1

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What does this code display in the console?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>print(5 + 13)</span> </p>
                <p><span>print(5 == 13)</span></p>
            </>
        ),
        options: ["18 and then 513", "18 and then False"],
        answer: 2

    },
    {
        id: 9,
        type: "code",
        theory: (

            <p>To check if a number isn’t equal to another number, we use the <b>inequality operator</b>,<span>!=</span> .</p>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p>
                    <span>print( 1 </span>
                    <input style={{ width: "50px" }} type="text" />

                    <span> 10 )</span>

                </p>
            </>
        ),
        answer: ["!="]

    },
    {
        id: 10,
        type: "code",
        theory: (

            <p>We can store the result of a comparison with the inequality operator in a variable like here where we’ll store the comparison <span> 1 != 2</span></p>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <span>result </span>
                    <input style={{ width: "50px" }} type="text" />
                    <span>1</span>
                    <input style={{ width: "50px" }} type="text" />
                    <span>2</span>
                </p>
            </>
        ),
        answer: ["=", "!="]

    },
    {
        id: 11,
        type: "code",
        theory: (

            <p>Variables can store the result of equality comparison too, such as <span>result = 1 == 2</span></p>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "90px" }} type="text" />
                    <input style={{ width: "50px" }} type="text" />
                    <span>1</span>
                    <input style={{ width: "50px" }} type="text" />
                    <span>2</span>
                </p>
            </>
        ),
        answer: ["result", "=", "=="]

    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
                <p>What does this code display in the console?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>vote_count = 99</span> </p>
                <p><span>target = vote_count == 100</span></p>
                <p><span>print(target)</span></p>
            </>
        ),
        options: ["\"target\"", "False"],
        answer: 2

    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
                <p>What does this code display in the console?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>result = 7 != 8</span> </p>
                <p><span>print(result)</span></p>
            </>
        ),
        options: ["True", "False"],
        answer: 1

    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
                <p>What is wrong with this code?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>score_one = 100</span> </p>
                <p><span>score_ two = 80</span></p>
                <p><span>equal = score_one == score_two</span></p>
            </>
        ),
        options: ["Nothing is wrong ", " We can’t compare numbers with =="],
        answer: 1

    },
    {
        id: 15,
        type: "code",
        theory: (

            <p>Check if <span>answer</span>equals <span>13</span></p>
        ),
        // keep a count of the number of code questions
        code_num: 7,
        ide_content: (
            <>
                <p><span>answer = 16</span></p>
                <p>
                    <span>correct_answer</span>
                    <input style={{ width: "50px" }} type="text" />
                    <span>answer</span>
                    <input style={{ width: "50px" }} type="text" />
                    <input style={{ width: "50px" }} type="text" />

                </p>
            </>
        ),
        answer: ["=", "==", "13"]

    },
    {
        id: 16,
        type: "code",
        theory: (

            <p>Check if the answer submitted by the user isn't zero letters with <span>!=</span></p>
        ),
        // keep a count of the number of code questions
        code_num: 8,
        ide_content: (
            <>
                <p><span>letter = 12</span></p>
                <p>
                    <span>valid_answer = letter</span>
                    <input style={{ width: "50px" }} type="text" />

                    <span>0</span>

                </p>
            </>
        ),
        answer: ["!="]

    },

];


export default questions;
