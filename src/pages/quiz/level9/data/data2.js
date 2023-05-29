
export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                To count how often a value appears in a list like answers, we start with the list name, a dot  ., and then <span>count()</span>.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>To count how often "yes" appears in the answers list, we code "yes" between the parentheses of <span>count()</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>answers = ["yes", "no", "sometimes", "yes", "no"]</span>
                </p>
                <p>
                    <span>print(answers.count(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>))</span>
                </p>
            </>
        ),
        answer: ['"yes"']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>If we don't want to know the exact number, but only if an element like "sugar" exists, we use the in keyword.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>ingredients = ["flour", "butter", "sugar", "eggs"]</span>
                </p>
                <p>
                    <span>print("sugar"</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>ingredients)</span>
                </p>
            </>
        ),
        answer: ['in']
    },
    {
        id: 4,
        type: "theory",
        message: (
            <>
                Checking if an element like "sugar" is in a list like "ingredients" gives us a boolean, either True or False
            </>
        )
    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>What does <span>count()</span> do when given a value?</p>
            </>
        ),
        ide: false,
        options: ["It tells us how often that value appears in a list", "It counts all the elements in a list"],
        answer: 1

    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>Where do we code the element that we want to count in a list?</p>
            </>
        ),
        ide: false,
        options: ["Between the parentheses of .count()", "Before .count()"],
        answer: 1

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>What types of values can we use <span>count()</span> with?</p>
            </>
        ),
        ide: false,
        options: ["String, boolean, integer and float", "Only strings"],
        answer: 1

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What can we use the <span>in</span> keyword for?</p>
            </>
        ),
        ide: false,
        options: ["Checking if a list contains an element", "Counting the number of occurrences of an element in a list"],
        answer: 1

    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>What type of value do we get when using the <span>in</span> keyword?</p>
            </>
        ),
        ide: false,
        options: ["A boolean like True or False", "A number"],
        answer: 1

    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>Find out how often the temperature was 32 degrees Fahrenheit by coding <span>32</span> between the parentheses.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>temperatures = [40, 32, 32, 38]</span>
                </p>
                <p>
                    <span>print(temperatures.count(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>))</span>
                </p>
            </>
        ),
        answer: ['32']
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
            <p>What's wrong with this code?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
                <p> <span>flavors = ["vanilla", "chocolate", "strawberry", "vanilla", "vanilla"]</span> </p>
                <p> <span>print(flavors.count())</span> </p>
            </>
        ),
        options: ["There should be a value between the parentheses of count()", "The list is too long"],
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
    level: 9,
    current_sublevel: 2,
    max_sublevel: 7,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Returning Tuples",

}

// console.log(quizDetails)

