export const questions = [
    {
      id: 1,
      type: "theory",
      message: (
        <>
          <p>
            We know how to run or skip code based on a condition like{" "}
            <span>age &gt; 16</span>.
          </p>
        </>
      ),
    },
    {
      id: 2,
      type: "code",
      theory: (
        <>
          <p>
            What if we wanted to run or skip code depending on two conditions?
            Like <span>age &gt; 16</span> and then <span>has_permit</span>.
          </p>
        </>
      ),
      // keep a count of the number of code questions
      code_num: 1,
      ide_content: (
        <>
          <p>
            <span>age = 17 </span>
          </p>
          <p>
            <span>has_permit = True</span>
          </p>
          <p>
            <span>if</span>
            <input style={{ width: "70px" }} type="text" />
            <span>and has_permit:</span>
          </p>
          <p>&emsp; print("Can drive")</p>
        </>
      ),
      answer: ["age > 16"],
    },
    {
      id: 3,
      type: "code",
      theory: (
        <>
          <p>
            The <span>and </span> operator allows us to run code only if both
            conditions <span>age &gt; 16</span> and <span>has_permit</span> are{" "}
            <span>True</span>.
          </p>
        </>
      ),
      // keep a count of the number of code questions
      code_num: 2,
      ide_content: (
        <>
          <p>
            <span>age = 17 </span>
          </p>
          <p>
            <span>has_permit = True</span>
          </p>
          <p>
            <span>if age &gt; 16 </span>
            <input style={{ width: "40px" }} type="text" />
            <span>has_permit:</span>
          </p>
          <p>&emsp; print("Can drive")</p>
        </>
      ),
      answer: ["and"],
    },
    {
      id: 4,
      type: "code",
      theory: (
        <>
          <p>
            The <span>and</span> operator skips the code block if one or more
            conditions are <span>False</span>, like <span>age &gt; 18</span>.
          </p>
        </>
      ),
      // keep a count of the number of code questions
      code_num: 3,
      ide_content: (
        <>
          <p>
            <p>
              <span>age = 17 </span>
            </p>
            <p>
              <span>has_permit = True</span>
            </p>
            <p>
              <span>if</span>
              <input style={{ width: "70px" }} type="text" />
              <span>and has_permit == True:</span>
            </p>
            <p>&emsp; print("Can drive")</p>
          </p>
        </>
      ),
      answer: ["age > 18"],
    },
    {
      id: 5,
      type: "code",
      theory: (
        <>
          <p>
           We can add as many conditions a we want, like here, where we can add another <span>and</span>, and then <span>is_insured</span> to complete the condition.
          </p>
        </>
      ),
      // keep a count of the number of code questions
      code_num: 4,
      ide_content: (
        <>
          <p>
            <p>
              <span>age = 17 </span>
            </p>
            <p>
              <span>has_permit = True</span>
            </p>
            <p><span>is_insured = True</span></p>
            <p>
              <span>if age &gt; 16 and has_permit </span>
              <input style={{ width: "45px" }} type="text" />
              <input style={{ width: "90px" }} type="text" />
              <span>:</span>
            </p>
            <p>&emsp; print("Can drive")</p>
          </p>
        </>
      ),
      answer: ['and','is_insured'],
    },
    {
      id: 6,
      type: "mcq",
      question: (
        <>
          <p>What is the <span>and</span> operator for?</p>
        </>
      ),
      // keep a count of the number of code questions
      ide: false,
      options: ['For linking multiple conditions','For negating conditions'],
      answer: 1,
    },
    {
      id: 7,
      type: "mcq",
      question: (
        <>
          <p>When does the <span>and</span> operator skip code block?</p>
        </>
      ),
      // keep a count of the number of code questions
      ide: false,
      options: ['When one or more conditions are false','Only when all conditions are false'],
      answer: 1,
    },
    {
      id: 8,
      type: "mcq",
      question: (
        <>
          <p>
          How many conditions can we link with the <span>and</span> operator?
          </p>  
        </>
      ),
      // keep a count of the number of code questions
      ide: false,
      options: ['As many as we want','At most two'],
      answer: 1,
    },
    {
      id: 9,
      type: "code",
      theory: (
        <>
          <p>
              To run code when either one of the conditions is <span>True</span>, we use the <span>or</span> operator.
          </p>
        </>
      ),
      // keep a count of the number of code questions
      code_num: 5,
      ide_content: (
        <>
          <p><span>average_grade = "A"</span></p>
          <p><span>final_score = 1400</span></p>
          <p><span>if average_grade == "A"</span>
          <input style={{ width: "30px" }} type="text" />
          <span>final_score &gt;= 1300:</span>
          </p>
          <p>&emsp;print("Certificate achieved!")</p>
        </>
      ),
      answer: ['or'],
    },
    {
      id: 10,
      type: "code",
      theory: (
        <>
          <p>
              With <span>or</span>, code gets skipped only if all conditions are <span>False</span> ,like <span>average_grade == "A"</span> and <span>final_score &gt;= 1500</span>.
          </p>
        </>
      ),
      // keep a count of the number of code questions
      code_num: 6,
      ide_content: (
        <>
          <p><span>average_grade = "B"</span></p>
          <p><span>final_score = 1400</span></p>
          <p><span>if average_grade == "A"</span>
          <input style={{ width: "30px" }} type="text" />
          <span>final_score &gt;= 1500:</span>
          </p>
          <p>&emsp;print("Certificate achieved!")</p>
        </>
      ),
      answer: ['or'],
    },
    {
      id: 11,
      type: "code",
      theory: (
        <>
          <p>
              Here, <span>final_score &gt;= 1500</span> is <span>False</span>, but the code still runs because <span>average_grade == "A"</span> is <span>True</span>.
          </p>
        </>
      ),
      // keep a count of the number of code questions
      code_num: 7,
      ide_content: (
        <>
          <p><span>average_grade =  <input style={{ width: "30px" }} type="text" /> </span></p>
          <p><span>final_score = 1400</span></p>
          <p><span>if </span>
          <input style={{ width: "160px" }} type="text" />
          <span> or final_score &gt;= 1500:</span>
          </p>
          <p>&emsp;print("Certificate achieved!")</p>
        </>
      ),
      answer: ['"A"','average_grade == "A"'],
    },
    {
      id: 12,
      type: "code",
      theory: (
        <>
          <p>
              We can use <span>or</span> to add as many conditions as we want like also adding <span>won_competition</span>.
          </p>
        </>
      ),
      // keep a count of the number of code questions
      code_num: 8,
      ide_content: (
        <>
          <p><span>average_grade = "B" </span></p>
          <p><span>final_score = 1400</span></p>
          <p><span>won_competition = True</span></p>
          <p><span>if average_grade == "A" or final_score &gt;= 1500 </span>
          <input style={{ width: "30px" }} type="text" />
          <input style={{ width: "140px" }} type="text" />
          <span> :</span>
          </p>
          <p>&emsp;print("Certificate achieved!")</p>
        </>
      ),
      answer: ['or','won_competition'],
    },
    {
      id: 13,
      type: "mcq",
      question: (
        <>
          <p>What does the <span>or</span> operator do?</p>
        </>
      ),
      // keep a count of the number of code questions
      ide: false,
      options: ['It helps us link alternative conditions','There is no or operator'],
      answer: 1,
    },
    {
      id: 14,
      type: "mcq",
      question: (
        <>
        <p>When does the <span>or</span>operator skip the code block?</p>
        </>
      ),
      // keep a count of the number of code questions
      ide: false,
      options: ['Only when all linked conditions are False','When at least one condition is False'],
      answer: 1,
    },
    {
      id: 15,
      type: "mcq",
      question: (
          <>
          <p>What does this display in the console?</p>
          </>
      ),
      // keep a count of the number of code questions
      ide: true,
      ide_content: (
          <>
           <p><span>is_summer = False</span></p>
           <p><span>is_warm = True</span></p>
           <p><span>if is_summer or is_warm:</span></p>
           <p>&emsp; <span>print("Go for a swim")</span></p>
          </>
      ),
      options:['Nothing,because is_summer is False','Go for a swim'],
      answer: 2
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
    current_sublevel: 5,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Using Complex Decisions",

}

// console.log(quizDetails)


