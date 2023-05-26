import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                To begin grouping related code, we start defining a function with the keyword def.           
            </>
        )
    },
    {
        id: 2,
        type: "theory",
        message: (
            <>
                Next comes the function's name in snake case, like greet_user, followed by parentheses, ( and ).           
            </>
        )
    },
    {
        id: 3,
        type: "theory",
        message: (
            <>
                Like before, a colon :, marks the beginning of the code block that belongs to the function.           
            </>
        )
    },
    {
        id: 4,
        type: "mcq",
        question: (
            <>
                <p>What does the colon : do?</p>
            </>
        ),
        ide: false,
        options: ["They mark the beginning of a function's code block", "It indicates what code the function should skip"],
        answer: 1
    },
    {
        id: 4,
        type: "mcq",
        question: (
            <>
                <p>Where does the code we want to group together go?</p>
            </>
        ),
        ide: false,
        options: ["Between the parentheses ( and )", "After the function definition, indented by two spaces"],
        answer: 2
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Code the def keyword to complete the function.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "60px" }} type="text" />
                    <span>weather_update()</span>
                </p>
                <p>
                    <span>print("Weather update")</span>
                </p>
            </>
        ),
        answer: ["monthly="]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>To run the code, we need to call the function. We do that by coding its name followed by parentheses, like greet_user().</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>def greet_user():</span>
                </p>
                <p>
                    <span>  print("Weather update")</span>
                </p>
                <p>
                    <input style={{ width: "60px" }} type="text" />
                </p>
            </>
        ),
        answer: ["greet_user()"]

    },
    {
        id: 7,
        type: "theory",
        message: (
            <>
               Instead of writing two functions, we can pass specific information like "Leslie" to just one function, without repeating code.          
            </>
        )
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>Why do we pass specific values to functions?</p>
            </>
        ),
        ide: false,
        options: ["Because we can't create new variables", "So we can use the same code for different values"],
        answer: 2
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
                <p>Add the status parameter to the function..</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>def user_status(</span>
                    <input style={{ width: "60px" }} type="text" />
                    <span>):</span>
                </p>
                <p>
                    <span>&emsp;print(f"Bob: {status}")</span>
                </p>
                <p>
                    <span>user_status("Active")</span>
                </p>
            </>
        ),
        answer: ["status"]

    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
                <p>How do we pass a value to the function's parameter?</p>
            </>
        ),
        ide: false,
        options: ["We call the function and place the value directly afterward", "We call the function with the value between parentheses"],
        answer: 2
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
                <p>Where do parameters go?</p>
            </>
        ),
        ide: false,
        options: ["Parameters go inside the parentheses of the function we're creating", "Parameters only go inside print() statements"],
        answer: 1
    },

];



// total number of questions (plus one is for the result page)
let total_ques = questions.length + 1
let total_xp = 0

// calculate total xp
questions.forEach(element => {
    if (element.type === "mcq") {
        total_xp += 10
    }
    else if (element.type === "code") {
        let array = element.answer
        total_xp += (10 * array.length)
    }
});

// right now it is set to 60%, can change this value if difficulty changes
let cutoff = (60 / 100) * total_xp

export const quizDetails = {
    level: 1,
    current_sublevel: 4,
    max_sublevel: 4,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Checking Number Equality",

}

// console.log(quizDetails)