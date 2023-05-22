import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>There’s a special value that’s neither a string nor a number. <b>True</b>.</p>
                <p>There are no quotes around it, and it’s not a numeric value.</p>
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p><span>True</span> is great for situations like checking if a feature is on or if data is available. We can see it here when we set <span>powered_on</span> to <span>True</span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>powered_on</span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "70px" }} type="text" />
                </p>
            </>
        ),
        answer: ['=', 'True']

    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>We can store <span>True</span>in a variable just like a string or a number. Displaying it also works the same, like when we display <span>correct</span>here.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p><span>correct = True</span></p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "80px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["correct"]

    },
    {
        id: 4,
        type: "theory",
        message: (
            <>
                <p><b>False</b>  is another special value and the opposite of <span>True</span>.</p>

            </>
        )
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>We can save <span>False</span> in the variable <span>status</span> and display <span>status</span>in the console.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p><span>print("Load data")</span></p>
                <p>
                    <span>status = </span>
                    <input style={{ width: "80px" }} type="text" />
                </p>
                <p>
                    <span>print( </span>
                    <input style={{ width: "80px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["False", "status"]

    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>What’s a good use for the values <span>True</span> and <span>False</span>?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ["Showing if a feature is switched on or off.", "Storing values from one to five."],
        answer: 1

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>Pick the one that’s best for showing a user unsubscribed from a service.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ["subscribed = True", "subscribed = False"],
        answer: 2

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>Why is <span>"False"</span> not the same as <span>False</span>?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: [" \"False\"and False are the same", "There are quotes around it,so “False” is a string"],
        answer: 2

    },
    {
        id: 9,
        type: "theory",
        message: (
            <>
                <p> The code <span>not</span> in front of <span>True</span> makes the expression result in <span>False</span>. If something is not true, it has to be false.</p>
                <br></br>
                <p><span>not</span> is the <b>negation operator</b>.It turns values into their <b>opposite.</b></p>
            </>
        )
    },

    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>When we change a value to its opposite with <span>not</span>, we negate it, like here with <span>not True</span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p>
                    <span>print( </span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "80px" }} type="text" />

                    <span>)</span>
                </p>
            </>
        ),
        answer: ["not", "True"]

    },

    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>The <span>not</span> operator before <span>False</span> changes its value. If a value is not <span>False</span>, it has to be <span>True</span>. We can see it here by displaying <span> not False</span> .</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <span>print( </span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "80px" }} type="text" />

                    <span>)</span>
                </p>
            </>
        ),
        answer: ["not", "False"]

    },

    {
        id: 12,
        type: "code",
        theory: (
            <>
                <p>We can save a whole negation in another variable. Like here <span>is_evening</span> should store the value of <span>not morning</span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p><span>morning = True</span></p>
                <p>
                    <input style={{ width: "100px" }} />
                    <input style={{ width: "40px" }} />
                    <input style={{ width: "40px" }} />
                    <input style={{ width: "100px" }} />
                </p>
                <p>print(is_evening)</p>
            </>
        ),
        answer: ["is_evening", "=", "not", "morning"]

    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
                <p>What does the <span>not</span> operator do?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ["It checks if values are equal.", "It turns True or False values into their opposite."],
        answer: 2

    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
                <p>Which value does <span>result</span> store ?</p>

            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>result = not True</span> </p>
            </>
        ),
        options: ["True", "False"],
        answer: 2

    },

    {
        id: 15,
        type: "code",
        theory: (
            <>
                <p> Create a variable <span>is_Available</span>and save the negated value in it.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 7,
        ide_content: (
            <>
                <p><span>open_slot = True</span></p>
                <p>
                    <input style={{ width: "100px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <span>not</span>
                    <input style={{ width: "100px" }} type="text" />
                </p>
            </>
        ),
        answer: ["is_Available", "=", "open_slot"]

    },

];


export default questions;
