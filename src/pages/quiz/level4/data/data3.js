export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                So far we've learned how to create a while loop, now let's focus on how to stop them from looping infinitely.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                To stop a loop, we start by creating a variable outside of the loop.
            </>
        ),
        code_num: 1,
        ide_content: (
            <>
            <p>
            <input style={{ width: "40px" }} type="text" />
            <input style={{ width: "40px" }} type="text" />
            <input style={{ width: "40px" }} type="text" />
            </p>
            <p>
                <span>
                while True:
                </span>
            </p>
            <p>
                <span>
                print("and again")
                </span>
            </p>
              
            </>
        ),
        options: ["print","keep_going",":","True","="],
        answer: ["keep_going","=","True"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                We use the variable in the condition to decide whether or not the loop should run its code block. For example, keep_going == True.
            </>
        ),
        code_num: 2,
        ide_content: (
            <>
            <p>
                <span>
                keep_going = True
                </span>
            </p>
            <p>
                <span>
                    while
                </span>
                <input style={{ width: "40px" }} type="text" />
                <span>
                    :
                </span>
            </p>

            <p>
                <span>
                print("and again")
                </span>
            </p>
              
            </>
        ),
        options: ["keep_going","True","=="],
        answer: ["keep_going","==","True"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                Inside the code block, we stop the loop by setting keep_going to False so that the condition returns False.
            </>
        ),
        code_num: 3,
        ide_content: (
            <>
            <p>
                <span>
                keep_going = True
                </span>
            </p>
            <p>
                <span>
                while keep_going == True:
                </span>
            </p>
            <p>
                <span>
                print("and again")
                </span>
            </p>
            <p>
            <span>
            keep_going = 
            </span>
            <input style={{ width: "40px" }} type="text" />
            </p>              
            </>
        ),
        answer: ["False"]
    },
    {
        id: 5,
        type: "theory",
        message: (
            <>
                The loop runs its entire code block because keep_going is True at first, but doesn't run again if we set keep_going to False.
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                keep_going = True
                </span>
            </p>
            <p>
                <span>
                while keep_going == True:
                </span>
            </p>
            <p>
                <span>
                print("and again")
                </span>
            </p>
            <p>
                <span>
                keep_going = False
                </span>
            </p>
            <p>
                <span>
                print("one more time")
                </span>
            </p>  
            </>
        )
    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
            How do we know this loop runs and never stops repeating its code block?
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
            load_data = False
            </p>
            <p>
            while True:
            </p> 
            <p>
            print("Loading data..")
            </p>
 
            </>
        ),
        options: ["There's no variable in the condition","This loop won't run since the condition is False"],
        answer: 1
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
            How do we know the while loop skips the print statement?
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                is_loading = False
                </span>
            </p>
            <p>
                <span>
                while is_loading == True:
                </span>
            </p>
            <p>
                <span>
                print("Loading Game")
                </span>
            </p>            
              
            </>
        ),
        options: ["Because is_loading is True so the condition is met","Because is_loading is False so the condition is not met"],
        answer: 2
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            What does this code display in the console?
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                keep_playing = True
                </span>
            </p>
            <p>
                <span>
                while keep_playing == True:
                </span>
            </p>
            <p>
                <span>
                print("Now Playing: Dolce Vita")
                </span>
            </p>           
            <p>
                <span>
                keep_playing = False
                </span>
            </p>
            </>
        ),
        options: ["This code displays nothing in the console","Now Playing: Dolce Vita"],
        answer: 2
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
                Skip the loop by using the auto_pilot variable inside the condition.
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
            <p>
                <span>
                auto_pilot = False
                </span>
            </p>
            <p>
                <span>
                while
                </span>
                <input style={{ width: "40px" }} type="text" />
                <span>
                == True:
                </span>
            </p>
            <p>
                <span>
                    
                </span>
            </p>
            <p>
                <span>

                </span>
            </p>
            <p>
                <span>
                print("Autopilot on: vroom!")
                </span>
            </p>     
            <p>
                <span>
                auto_pilot = False
                </span>
            </p>
            </>
        ),
        options: ["True","auto_pilot","while"],
        answer: ["auto_pilot"]

    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>Stop the while loop using variables.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p>
                    <span>
                    keep_playing = True
                    </span>
                </p>
                <p>
                    <span>
                    while keep_playing == True:
                    </span>
                </p>
                <p>
                    <span>
                    print("Now Playing: Yummy")
                    </span>
                </p>
                <p>
                <span>
                <input style={{ width: "20px" }} type="text" />
                <input style={{ width: "20px" }} type="text" />
                <input style={{ width: "20px" }} type="text" />
                </span>
                </p> 
                
            </>
        ),
        options: ["=","True","==","keep_playing","False"],
        answer: ["keep_playiing","=","False"]

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
    level: 4,
    current_sublevel: 3,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Stopping While Loops",

}

// console.log(quizDetails)
