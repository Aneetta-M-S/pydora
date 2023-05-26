
export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                To calculate the total of a list, we use <span>sum()</span>, with the list name between the parentheses, like <span>sum(signups)</span> here.
                <br></br>
                <span>signups = [30, 6, 20, 12]</span>
                <br></br>
                <span>print(sum(signups))</span>
            </>
        )
    },
    {
        id: 2,
        type: "theory",
        message: (
            <>
                When a list also contains negative numbers like -3, the negative numbers are subtracted from the sum of the positive numbers.
            </>
        )
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>Sum up the prices in an online shopping cart with <span>sum()</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>cart = [30, 6, 50]</span>
                </p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>(cart))</span>
                </p>
            </>
        ),
        answer: ["sum"]
    },
    {
        id: 4,
        type: "mcq",
        question: (
            <>
                <p>What happens when we use <span>sum()</span> on a list that contains negative numbers?</p>
            </>
        ),
        ide: false,
        options: ["We'll get the sum of the positive numbers, minus that of the negative", "The negative numbers won't be taken into account"],
        answer: 1

    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>What does <span>sum()</span> do when used on a list of numbers?</p>
            </>
        ),
        ide: false,
        options: ["It tells us the number of elements in the list", "It sums up the numbers in the list"],
        answer: 2

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>Save the total amount of sugar needed for a cake recipe in the variable total.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>sugar = [120, 50]</span>
                </p>
                <p>
                    <span>total = </span>
                    <input style={{ width: "80px" }} type="text" />
                </p>
                <p>
                    <span>print(print(total))</span>
                </p>
            </>
        ),
        answer: ["sum(sugar)"]
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
    current_sublevel: 3,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "",

}

// console.log(quizDetails)

