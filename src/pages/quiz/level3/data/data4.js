export 
const questions = [
    {
        id: 1,
        type: "code",
        theory: (
            <>
               <p>Using <span>if</span> and <span>else</span> statement, we can write a program that showns one greeting if <span>hour</span> is less than <span>12</span> and another if it does not fulfill the condition.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p><span>hour = 9</span></p>
                <p>
                    <span>if  </span>
                    <input style={{ width: "50px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "30px" }} type="text" />
                    <span> :</span>
                    
                </p>
                <p>&emsp; print ("Good morning") </p>
                <p><span>else:</span></p>
                <p>&emsp;<span>print("Good night")</span></p>
            </>
        ),
        answer: ['hour','<','12']
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
              <p>For a more specific condition, like if <span>hour</span>is greater than <span>12</span>,<b>but</b> less than <span>17</span>,we can code <span>elif hour &lt; 17: intead. </span></p>
              <p><span>elif</span>stands for else if.<span>elif</span>is used when there is a second condition to be checked whe the condition of the <span>if</span> block was not met.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
               <p><span>hour = 14</span></p>
               <p><span>if  hour &lt; 12:</span></p>
               <p>&emsp;<span>print("Good morning")</span></p>
               <p>
               <input style={{ width: "40px" }} type="text" />
               <input style={{ width: "90px" }} type="text" />
               <input style={{ width: "20px" }} type="text" />
               </p>
               <p>&emsp;<span>print("Good afternoon")</span></p>
            </>
        ),
        answer: ['elif','hour < 17',':']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>The <b>elif statement</b> runs its code bock if the conditions before it were <span>False</span> and its condition, like <span>hour &lt; 17 </span>is <span>True</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
              <p><span>hour = 14</span></p>
               <p><span>if hour &lt; 12:</span></p>
               <p>&emsp;<span>print("Good morning")</span></p>
               <p>
                <span>elif</span>
               <input style={{ width: "90px" }} type="text" />
               <span>:</span>
               </p>
               <p>&emsp;<span>print("Good afternoon")</span></p>
            </>
        ),
        answer: ['hour < 17']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
            <p>We can code an <span>else</span> statement to run its code block when <span>if</span> and <span>elif</span>conditions are<span>False</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
              <p><span>hour = 18</span></p>
               <p><span>if hour &lt; 12:</span></p>
               <p>&emsp;<span>print("Good morning")</span></p>
               <p><span>elif hour &lt; 17:</span></p>
               <p><span>&emsp;print("Good afternoon")</span></p>
               <p>
               <input style={{ width: "40px" }} type="text" />
               <span>:</span>
               </p>
               <p>&emsp;<span>print("Good night")</span></p>
            </>
        ),
        answer: ['else']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>As long as they go before the <span>else</span> statement, we can add as many <span>elif</span> statement as we'd like.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
              <p><span>hour = 20</span></p>
               <p><span>if hour &lt; 12:</span></p>

               <p>
               <input style={{ width: "40px" }} type="text" />
               <span> hour &lt; 17 :</span>
               </p>
               <p>&emsp;<span>print("Good afternoon")</span></p>

               <p>
               <input style={{ width: "40px" }} type="text" />
               <span> hour &lt; 21 :</span>
               </p>
               <p>&emsp;<span>print("Good evening")</span></p>

               <p><span>else :</span></p>
               <p>&emsp;<span>print("Good night")</span></p>             
            </>
        ),
        answer: ['elif','elif']
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
             <p><span>number = 6</span></p>
             <p><span>if number &lt; 5:</span></p>
             <p>&emsp; <span>print("Less than five")</span></p>
             <p><span>elif number &lt; 10 :</span></p>
             <p>&emsp;<span>print("Less than ten")</span></p>
            </>
        ),
        options: ['Less than five','Less than ten'],
        answer: 2
    },
    {
        id: 7,
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
             <p><span>score = 76</span></p>
             <p><span>if score &gt;= 90:</span></p>
             <p>&emsp; <span>print("You got an A!")</span></p>
             <p><span>elif score &gt;= 70 :</span></p>
             <p>&emsp;<span>print("You passed")</span></p>
            </>
        ),
        options:['You passed','You got an A!'],
        answer: 1
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            <p>What happens when the <span>if</span> statement and <span>elif</span> statements' conditions return <span>False</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
             <p><span>score = 76</span></p>
             <p><span>if score &gt;= 90:</span></p>
             <p>&emsp; <span>print("You got an A!")</span></p>
             <p><span>elif score &gt;= 70 :</span></p>
             <p>&emsp;<span>print("You passed")</span></p>
             <p><span>else :</span></p>
             <p>&emsp; print("Better luck next time")</p>
            </>
        ),
        options:['The else statement code block runs','Nothing happens'],
        answer: 1
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
             <p>What is the maximum number of <span>elif</span> statements we can add to an <span>if</span> statement?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options:['There is no maximum number','10'],
        answer: 1
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
             <p>Code the keywords for an <span>elif</span>statement.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>

            <p><span>topping = "pepperoni"</span></p>
            <p><span>if topping == "pineapple":</span></p>
            <p>&emsp;<span>print("Request denied.")</span></p>
                <p>
                   
                    <input style={{ width: "40px" }} type="text" />
                   <span>topping == "pepperoni":</span>
                </p>
                <p>&emsp;<span>print ("Request accepted")</span></p>
            </>
        ),
        answer: ['elif']
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
    level: 3,
    current_sublevel: 4,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Incorporating Elif",

}

// console.log(quizDetails)


