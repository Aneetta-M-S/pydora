import React from "react";


const questions = [
    {
        id: 1,
        type: "code",
        theory: (
            <>
                <p><b>Variables</b> are called variables because the values they store can change. We can update <span>status</span> by using <span>=</span> and giving it a new value.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p><span>status = “Watching the night sky”</span></p>
                <p>
                    <span>status</span>

                    <input style={{ width: "20px" }} type="text" />

                    <span>"Relaxing at the beach"</span>
                </p>
                <p><span>print(status)</span></p>
            </>
        ),
        answer: ["="]
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>We can also give variables the values of other variables. Here, we can give the <span>new_status</span> variable the value of <span>default_option</span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p><span>default_option = “upload”</span></p>
                <p><span>new_status = “download”</span></p>
                <p>
                    <span>new_status = </span>
                    <input style={{ width: "120px" }} />
                </p>
                <p><span>print(new_status)</span></p>
            </>
        ),
        answer: ["default_option"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>When we update a variable, it forgets its previous value.Here, we can display the <span>status</span> variable twice and see how its value updates.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p><span>status = "Playing Footbal"</span></p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "60px" }} />
                    <span>)</span>
                </p>
                <p><span>status = "Walking the dog"</span></p>
                <p><span>print(status)</span></p>
            </>
        ),
        answer: ["status"]
    },
    {
        id: 4,
        type: "mcq",
        question: (
            <>
                <p>Which of these lines of code updates the <span>status</span> variable?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ["status == \"Working out\"", "status = \"Working out\""],
        answer: 2

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Change the value in the <span>temperature</span> variable to <span>"100 degrees"</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p><span>temperature = "0 degree"</span></p>
                <p>
                    <input style={{ width: "110px" }} />
                    <span>= "100 degrees"</span>
                </p>
                <p><span>print(temperature)</span></p>
            </>
        ),
        answer: ["temperature"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>We can add string values together with a <span>+</span> sign.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <span>"Followers:" </span>
                    <input style={{ width: "20px" }} />
                    <span>"55"</span>
                </p>
            </>
        ),
        answer: ["+"]

    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
                <p>We call adding string values an <b>expression</b>  as it creates a single value. One string displays when we add <span>"55"</span> inside <span>print()</span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p>
                    <span>print("Followers:" </span>
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "40px" }} />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["+", "\"55\""]
    },
    {
        id: 8,
        type: "code",
        theory: (
            <>
                <p>When expressions contain variables, they use the values in the variables, which we can see when adding <span>"Followers:"</span> to <span>followers.</span></p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 7,
        ide_content: (
            <>
                <p><span>followers = "55"</span></p>

                <p>
                    <span>print("Followers:" </span>
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "80px" }} />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["+", "followers"]
    },
    {
        id: 9,
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
                <p> <span>print("Jon" + "athan")</span> </p>
            </>
        ),
        options: ["Nothing, because there’s no print() instruction", "Jonathan"],
        answer: 2

    },

    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>We’ll encounter many other kinds of values in Python, too. Like <b>numbers</b>, which have no double quotes  around them.</p>
                <p> <span>5</span> or <span>"5"</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 8,
        ide_content: (
            <>
                <p>
                    <span>active_user =  </span>
                    <input style={{ width: "20px" }} />
                </p>
            </>
        ),
        answer: ["5"]
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>Numbers make it easier to keep track of <b>numeric data</b> . Like here, <span>active_users</span> stores the number <span>5</span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 9,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "110px" }} />
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "20px" }} />

                </p>
            </>
        ),
        answer: ["active_users", "=", "5"]
    },
    {
        id: 12,
        type: "code",
        theory: (
            <>
                <p>We can create expression with numbers,too. Here, we can add numbers together with <span>+ 1 </span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 10,
        ide_content: (
            <>
                <p>
                    <span>number_of_applications = 5 </span>
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "20px" }} />

                </p>
                <p><span>print(number_of_applications)</span></p>
            </>
        ),
        answer: ["+", "1"]
    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>We use the <span>*</span> sign to multiply numbers and the <span>/</span> sign to divide numbers. We'll turn <span>0.5</span> into its percent values
                    by multiplying it by <span>100</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 11,
        ide_content: (
            <>
                <p>
                    <span>percent = 0.5</span>
                    <input style={{ width: "20px" }} />
                    <span>100</span>
                </p>
                <p><span>print(percent)</span></p>
            </>
        ),
        answer: ["*"]
    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
                <p>What's the value of <span>speed</span>?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>speed = 300 + 5</span> </p>
            </>
        ),
        options: ["300", "305"],
        answer: 2

    },
    {
        id: 15,
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
                <p><span>area = "3 * 5"</span></p>
                <p><span>print(area)</span></p>            </>
        ),
        options: ["3 *5", "15"],
        answer: 1

    },
    {
        id: 16,
        type: "code",
        theory: (
            <>
                <p>Divide <span>sum_of_grades</span> by <span>students</span> to get average grade of a class.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 12,
        ide_content: (
            <>
                <p><span>sum_of_grades = 460</span></p>
                <p><span>students = 5</span></p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "130px" }} />
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "80px" }} />
                    <span>)</span>

                </p>
            </>
        ),
        answer: ["sum_of_grades", "/", "students"]
    },


];


export default questions;

