export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Functions are written to perform tasks and sometimes, we may need the outcome of the tasks, this can be done via return.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>To return something from a function we add the return keyword followed by the value to return, like here with return label.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>def age_label(age):</span>
                </p>
                <p>
                    <span>&emsp;label = "User age: " + age</span>
                </p>
                <p>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                </p>
            </>
        ),
        answer: ["return", "label"]
    },
    {
        id: 3,
        type: "theory",
        message: (
            <>
                A function can return any type of value, like a string, integer, float, or boolean.
            </>
        )
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>In the example below, we would want the function to tell us what is the result of the number parameter multiplied by 10.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>def times_ten(number):</span>
                </p>
                <p>
                    <span>&emsp;result = number * 10</span>
                </p>
                <p>
                    <span>return</span>
                    <input style={{ width: "40px" }} type="text" />
                </p>
            </>
        ),
        answer: ["result"]
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>We can use the return value of a function like any value by calling the function. Here, we call <span>age_label("22")</span> to use its value</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>def age_label(age):</span>
                </p>
                <p>
                    <span>&emsp;label = "User age: " + age</span>
                    <span>&emsp;return label</span>
                </p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["age_label(\"22\")"]
    },
    {
        id: 6,
        type: "theory",
        message: (
            <>
                If we dont include a 1, <span>return</span> statement, the function returns the value <span>None</span> instead
            </>
        )
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>Which type of value can a function return?</p>
            </>
        ),
        ide: false,
        options: ["A function can return any type of value, like a string, integer, float or boolean", "A function can only return strings and numbers"],
        answer: 1

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What happens when we don't include the return statement in our function?</p>
            </>
        ),
        ide: false,
        options: ["There's an infinite loop in the function", "We get the value None"],
        answer: 1

    },
    {
        id: 9,
        type: "theory",
        message: (
            <>
                Functions need multiple parameters to perform tasks on more pieces of data, like a new player's first and last name
            </>
        )
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>To add more parameters to a function, we code a comma followed by the next parameter's name, like last for the last name.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p>
                    <span>def display(first</span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <span>):</span>
                </p>
                <p>
                    <span>&emsp;print(first + " " + last)</span>
                </p>
                <p>
                    <span>display("Alex", "Morgan")</span>
                </p>
            </>
        ),
        answer: [",","last"]
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>To pass a second value to the function, like the last name "Morgan", we code a comma followed by the value.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <span>def display(first, last):</span>
                </p>
                <p>
                    <span>&emsp;print(first + " " + last)</span>
                </p>
                <p>
                    <span>display("Alex"</span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: [",","Morgan"]
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
                <p>How many parameters can a function have?</p>
            </>
        ),
        ide: false,
        options: ["As many as we'd like", "At most three"],
        answer: 1

    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
                <p>When calling a function, how do we pass values to the function when it has multiple parameters?</p>
            </>
        ),
        ide: false,
        options: ["In the order that the parameters are placed in the function definition", "In any order"],
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
    level: 8,
    current_sublevel: 2,
    max_sublevel: 4,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "",

}

// console.log(quizDetails)