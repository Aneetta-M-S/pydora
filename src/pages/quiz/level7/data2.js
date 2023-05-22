import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
               Sometimes we'll need to update data inside a string without creating a whole new string. Like updating a daily lunch special.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>We can replace a part of a string stored inside a variable by first coding the variable's name and the instruction <span>replace()</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>special = "Today's special is pasta"</span>
                </p>
                <p>
                    <span>new_special = special</span>
                    <input style={{ width: "60px" }} type="text" />
                </p>
            </>
        ),
        answer: [".replace()"]

    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>Inside the parentheses, we add the part we want to replace, like "pasta", a comma, and then the new value, "pizza".</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>special = "Today's special is pasta"</span>
                </p>
                <p>
                    <span>new_special = special.replace(</span>
                    <input style={{ width: "60px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["\"pasta\",\"pizza\""]

    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>Instead of creating a new variable, we can reassign the original variable to the updated string by coding <span>special</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>special = "Today's special is pasta"</span>
                </p>
                <p>
                    <input style={{ width: "40px" }} type="text" />
                    <span>= special.replace("pasta","pizza")</span>
                    <span>print(special)</span>
                </p>
            </>
        ),
        answer: ["special"]

    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>What does <span>replace()</span> do?</p>
            </>
        ),
        ide: false,
        options: ["It replaces a part of a string with another value", "It creates an empty string"],
        answer: 1

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
                <p> <span>age_group = "twenty-five to thirty"</span> </p>
                <p> <span>updated = age_group.replace("thirty","thirty-five")</span> </p>
                <p> <span>print(updated)</span> </p>
            </>
        ),
        options: ["twenty-five to thirty-five", "twenty-five to thirty"],
        answer: 1

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>How can we reuse the result given by <span>replace()</span>?</p>
            </>
        ),
        ide: false,
        options: ["We can't reuse the result since it always changes", "By creating a variable and storing it inside"],
        answer: 2

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>How can we reuse the result given by <span>replace()</span>?</p>
            </>
        ),
        ide: false,
        options: ["We can't reuse the original variable", "We can reassign the original variable to the updated string"],
        answer: 2

    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
                <p>Reassign the monthly variable to the updated value and display it in the console</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                    <span>monthly = "Monthly reduction is 25%"</span>
                </p>
                <p>
                    <input style={{ width: "60px" }} type="text" />
                    <span>monthly.replace("25%","15%")</span>
                </p>
            </>
        ),
        answer: ["monthly="]

    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>Replace all occurrences of . with #</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
                <p>
                    <span>tags = ".code .today"</span>
                </p>
                <p>
                    <span>hash_tag = tags.replace(".",</span>
                    <input style={{ width: "10px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: [","]

    },

]


export default questions;