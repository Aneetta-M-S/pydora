export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                There's an easy way to loop through all the elements of list by using a for loop.
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                final_scores = [17, 22, 34, 13]
                </span>
            </p>
            <p>
                <span>
                for score in final_scores:
                </span>
            </p>
            <p>
                <span>
                  &emsp;  print(score)
                </span>
            </p>
         </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                To loop through the elements in the final_scores list, we write for, a variable like score, the word in, and the list final_scores
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>
                    final_scores = [17, 22, 34, 13]
                    </span>
                </p>
                <p>
                    <input style={{ width: "40px" }} type="text" />
                    <span>:</span>
                </p>
                <p>
                    <span>
                        &emsp;print(score)
                    </span>
                </p>
                    
            </>
        ),
        options: ["in","final_scores","for","score"],
        answer: ["for","score","in","final_scores"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                The loop will run for as many elements as there are in the list. We'll see four elements in the console here by coding print(score).
            </>
        ),
        ide_num:2,
        ide_content: (
            <>
            <p>
                <span>
                final_scores = [17, 22, 34, 13]
                </span>
            </p>
           <p>
            <span>
            for score in final_scores:
            </span>
           </p>
            <p>
                &emsp;
            <input style={{ width: "40px" }} type="text" />
            </p>
            
            </>
        ),
        answer: ["print(score)"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>The variable before in holds the value of the list element the loop is currently on. Here, we'll use artist for the variable.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>
                    artists = ["Chagall", "Lissitzky"] 
                    </span>
                </p>
                <p>
                <input style={{ width: "40px" }} type="text" />
                <input style={{ width: "40px" }} type="text" />
                <span>
                in artists:
                </span>
                </p>
                <p>
                    <span>
                        &emsp;print(artist)
                    </span>
                </p>
                <p>
                    <span>
                        &emsp; print("----")
                    </span>
                </p>
            </>
        ),
        options: ["print","artist","for"],
        answer: ["for","artist"]

    },
    {
        id: 5,
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
                <p>
                    <span>
                    student_grades = ["A", "A-", "C"]
                    </span>
                </p>
                <p>
                    <span>
                    for grade in student_grades:
                    </span>
                </p>
                <p>
                    <span>
                        &emsp;print(grade)
                    </span>
                </p>
            </>
        ),
        options: ["\"A\", followed by \"A-\", and finally \"C\"","This code won't display anything in the console"],
        answer: [1]

    },
    {
        id: 6,
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
                <p>
                    <span>
                    singers = ["Bowie", "Freddie"] 

                    </span>
                </p>
                <p>
                <input style={{ width: "160px" }} type="text" />
                    <span>
                    in singer for singers:
                    </span>
                </p>
                <p>
                    <span>
                        &emsp;
                    print(singer) 
                    </span>
                </p>
            </>
        ),
        options: ["The position of in and for is mixed up","There's nothing wrong with this code"],
        answer: [1]

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
            <p>
                <span>
                consoles = ["Playstation", "Xbox"]
                </span>
            </p>
            <p>
                <span>
                for console in consoles:
                </span>
            </p>
            <p>
                <span>
                  &emsp;print(console)
                </span>
            </p>        
            </>
        ),
        options: ["\"Playstation\" and \"Xbox\"", "Nothing is displayed in the console"],
        answer: [1]

    },
    {
        id: 8,
        type: "code",
        theory: (
            <>
            <p>Assemble a for with the supplies list.</p>
            </>
        ),
        ide_num: 4,
        ide_content: (
            <>
            <p>
                <span>
                supplies = ["pencil", "book"]
                </span>
            </p>
            <p>
            <input style={{ width: "40px" }} type="text" />
                <span>
                value  
                </span>
                <input style={{ width: "40px" }} type="text" />
                <input style={{ width: "40px" }} type="text" />
                <input style={{ width: "40px" }} type="text" />
            </p>
            <p>
                <span>
                    &emsp;
                print(value) 
                </span>
            </p>
            
                
                
            </>
        ),
        options: ["in",":","supplies","for"],
        answer: ["for","in","supplies",":"]
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
    level: 5,
    current_sublevel: 4,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Looping over Lists",

}

// console.log(quizDetails)


