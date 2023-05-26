
export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                To find the largest number in a list of data like scores, code <span>max()</span>, with the name of the list between parentheses.
                <br></br>
                To find the smallest number in the scores list, we use <span>min()</span> with the list name between parentheses.
            </>
        )
    },
    {
        id: 2,
        type: "mcq",
        question: (
            <>
                <p>What does max() do?</p>
            </>
        ),
        ide: false,
        options: ["It gives the length of a list of numbers", "It finds the greatest value in a list of numbers"],
        answer: 2

    },
    {
        id: 3,
        type: "mcq",
        question: (
            <>
                <p>What is min() for?</p>
            </>
        ),
        ide: false,
        options: ["Removing elements from a list", "Finding the smallest number in a list"],
        answer: 2

    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>We can reuse the results of <span>min()</span> and <span>max()</span> by saving them in variables.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>scores = [3, 6, 1, 12]</span>
                </p>
                <p> 
                    <span>min_score=</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>(scores)</span>
                </p>
                <p>
                    <span>max_score=</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>(scores)</span>
                </p>
                <p>
                    <span>print(max_score)</span>
                </p>
                <p>
                    <span>print(min_score)</span>
                </p>
            </>
        ),
        answer: ["min","max"]
    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
            <p>How can we reuse the value given by <span>max(jeans_sizes)</span>?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>jeans_sizes = [25, 28, 40]</span> </p>
                <p> <span>max(jeans_sizes)</span> </p>
            </>
        ),
        options: ["By saving the result of max(jeans_sizes) in a variable", "We can't reuse the value, we can only display it once"],
        answer: 1

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>Find the highest temperature over the last three days with <span>max()</span>, in the list temperatures.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>temperatures = [68, 60, 81]</span>
                </p>
                <p> 
                    <span>print(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>(temperatures))</span>
                </p>
            </>
        ),
        answer: ["max"]
    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
                <p>Find the smallest number of shares a social media post got over the last four days with <span>min(shares)</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>shares = [12, 5, 3, 7]</span>
                </p>
                <p> 
                    <span>print(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>(shares))</span>
                </p>
            </>
        ),
        answer: ["min"]
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
    level: 6,
    current_sublevel: 1,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "",

}

// console.log(quizDetails)

