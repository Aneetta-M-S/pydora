
export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>Python allows us to use <b>negative indexing</b> to retrieve values from the end of an indexable object, such as a list.</p>
            </>
        )
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
    level: 10,
    current_sublevel: 5,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Slice Notation",

}

// console.log(quizDetails)


