export 
const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                <p>Great software doesn't just decide what to do when a condition is <span>True</span>, it also has a back-up plan if the condition is <span>False</span>.</p>
            </>
        ),
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>We already know <span>if</span> statements help us execute a code if a condition like <span>available </span> is <span>True</span>. </p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "80px" }} type="text" />
                    <spa> = </spa>
                    <input style={{ width: "45px" }} type="text" />
                </p>
                <p>
                    <span>if </span>
                    <input style={{ width: "80px" }} type="text" />
                    <span>:</span>

                </p>
                <p>&emsp; print ( "In stock" )</p>
            </>
        ),
        answer: ['available', 'True', 'available']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>Let's add another <span>if</span> statement that uses <span>not available</span> to run different code if the condition is <span>False</span>.</p>
                <p>Code <span>not available</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p><span>available = True</span></p>
                <p><span>if available : </span></p>
                <p>&emsp;<span>print ("In stock")</span></p>
                <p>  <span>if </span>
                    <input style={{ width: "110px" }} type="text" />
                    <span>:</span>

                </p>
                <p>&emsp;<span>print ("Out of stock")</span></p>

            </>
        ),
        answer: ['not available']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>Instead of creating two <span>if</span> statements, we use an <span>if</span>/ <span>else</span> statement to achieve the same result.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p><span>available = True</span></p>
                <p><span>if available : </span></p>
                <p>&emsp;<span>print ("In stock")</span></p>
                <p>  <input style={{ width: "40px" }} type="text" />
                    <span>:</span> </p>
                <p>&emsp;<span>print ("Out of stock")</span></p>
            </>
        ),
        answer: ['else']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>The <span>else</span> statement of an <span>if</span>/ <span>else</span> statement always goes at the end.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p><span>available = False</span></p>
                <p><input style={{ width: "20px" }} type="text" />
                    <span> available :</span></p>
                <p>&emsp;<span>print ("In stock")</span></p>
                <p>  <input style={{ width: "40px" }} type="text" />
                    <span>:</span> </p>
                <p>&emsp;<span>print ("Out of stock")</span></p>
            </>
        ),
        answer: ['if','else']
    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
                <p>The <span>else </span> statement doesn't need its own condition. That's because it handles the cases where the if's condition is <span>False</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p><span>number = 99 </span></p>
                <p><input style={{ width: "20px" }} type="text" />
                <input style={{ width: "70px" }} type="text" />
                    <span>  :</span></p>
                <p>&emsp;<span>print ("It's 1")</span></p>
                <p>  <input style={{ width: "40px" }} type="text" />
                    <span>:</span> </p>
                <p>&emsp;<span>print ("It's not 1")</span></p>
            </>
        ),
        answer: ['if','number==1','else']
    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
                <p>The <span>else</span> statement is like a default response. Here, it should display <span>"It's not 1"</span> for all numbers not equal 1.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p><span>number = 99 </span></p>
                <p><span>if number == 1:</span></p>
                <p><span>&emsp;print("It's 1")</span></p>
                <p><span>else:</span></p>
                <p>&emsp;<span>print(</span>
                <input style={{ width: "90px" }} type="text" />
                <span>)</span></p>
            </>
        ),
        answer: ['"It\'s not 1"']
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What does the <span>else</span> statement go?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ["At the end of the if statement's code block","Before the if statement's code block"],
        answer: 1
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
              <p><span>is_subscribed = True</span></p>
              <p><span>if is_subscribed:</span></p>
              <p>&emsp;<span>print("Enjoy 10% off!")</span></p>
              <p><span>else :</span></p>
              <p>&emsp;<span>print("Become a subscriber!")</span></p>
            </>
        ),
        options: ['Enjoy 10% off!','Become a subscriber!'],
        answer: 1
    },
    {
        id: 10,
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
              <p><span>is_subscribed = False</span></p>
              <p><span>if is_subscribed:</span></p>
              <p>&emsp;<span>print("Enjoy 10% off!")</span></p>
              <p><span>else :</span></p>
              <p>&emsp;<span>print("Become a subscriber!")</span></p>
            </>
        ),
        options: ['Enjoy 10% off!','Become a subscriber!'],
        answer: 2
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
                <p>What are the components of the <span>else</span> statement ?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['The else keyword, a condition, and the colon :','The else keyword and the colon :'],
        answer: 2
    }
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
    level: 3,
    current_sublevel: 3,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Coding Else Statements",

}

// console.log(quizDetails)
