export const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Let's find out how we can count the elements in lists and use them with if statements.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                We use the len() instruction with the list name in parentheses to get the number of elements in a list.
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
            <p>
                <span>
                users = ["Sarah", "Mike", "Ella"]
                </span>
            </p>
                <p>
                    <span>
                    print(
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    
                    <span>
                    users
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>
                    )
                    </span>
                </p>
                
                   
            </>
        ),
        options: [")","(","len"],
        answer: ["len","(",")"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                We can use print() to display the length of a list in the console.
            </>
        ),
        ide_num:2,
        ide_content: (
            <>
            <p>
                <span>
                users = ["Sarah", "Mike", "Ella"]
                </span>
            </p>
            <p>
            <input style={{ width: "40px" }} type="text" />
            <input style={{ width: "40px" }} type="text" />
            <span>
            len(users)
            </span>
            <input style={{ width: "40px" }} type="text" /> 
            </p>
 </>
        ),
        options: [")","(","print","for"],
        answer: ["print","(",")"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>We can store the length of a list in a variable, like here with number_of_users.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>
                    users = ["Sarah", "Mike", "Ella"]
                    </span>
                </p>
                <p>
                <input style={{ width: "40px" }} type="text" />
                <span>
                = len(users)
                </span> 
                </p>
                <p>
                    <span>
                    print(number_of_users)
                    </span>
                </p>
            </>
        ),
        
        answer: ["number_of_users"]

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>If we use len() on an empty list it'll return 0. We can see it here when we display the number_of_users variable.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                    <span>
                    users = []
                    </span>
                </p>
                <p>
                    <span>
                    number_of_users = len(users)
                    </span>
                </p>
                <p>
                <input style={{ width: "20px" }} type="text" />
                <span>
                    (
                </span>
                <input style={{ width: "20px" }} type="text" />
                <span>
                    )
                </span>
                </p>
            </>
        ),
        options: ["print","number_of_users"],
        answer: ["print","number_of_users"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
            <p>We can use list length to create conditional statements based on the number of elements, like here with len(tasks) &lt; 0</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
                <p>
                    <span>
                    tasks = ["dishes", "windows", "vacuum"]
                    </span>
                      
                </p>
                <p>
                    <span>
                        if
                    </span>
                    <input style={{ width: "160px" }} type="text" />
                    <span>
                        :
                    </span>
                </p>
                <p>
                print("Ugh, more work!")
                </p>
            </>
        ),
        answer: ["len(tasks) < 0"]

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
            <p>What does the len() instruction do?</p>
            </>
        ),
        options: ["It removes the element len from a list", "It tells the number of elements in a list"],
        answer: [2]

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            <p>What happens when we use len() on a list that does not have any values?</p>
            </>
        ),
        options: ["It causes an infinite loop","It returns the value 0"],
        answer: [2]
    },
    {
        id: 9,
        type: "code",
        question: (
            <>
            <p>Display the length of this list in the console.</p>
            </>
        ),
        ide_num: 6,
        ide_content: (
           <>
           <p>
            <span>
            square_meters = [55, 67, 100]
            </span>
           </p>
           <p>
           <input style={{ width: "160px" }} type="text" />
           <span>(</span>
           <input style={{ width: "160px" }} type="text" />
           <span>(</span>
           <input style={{ width: "160px" }} type="text" />
           <span>)</span>
           <input style={{ width: "160px" }} type="text" />
           <span>)</span>
           </p>
           </>
        ),
        options: ["print","square_meters","len"],
        answer: ["print","len","square_meters"]
    },
    {
        id: 10,
        type: "code",
        question: (
            <>
            <p>
            Store the length of this list in a variable by coding len(subway_lines).
            </p>
            </>
        ),
        ide_num: 7,
        ide_content: (
            <>
            <p>
                <span>
                subway_lines = ["U1", "U3", "U6"]
                </span>
            </p>
            <p>
                <span>
                number_of_lines =
                </span>
                <input style={{ width: "160px" }} type="text" />
            </p>            
            </>
        ),
        answer: ["len(subway_lines)"]
    },
    {
        id: 11,
        type: "code",
        question: (
            <>
            <p>
            Rather than rewriting the variable's name, we can use the += operator to add a number with sales += 1.
            </p>
            </>
        ),
        ide_num: 8,
        ide_content: (
            <>
            <p>
                <span>
                sales = 5
                </span>
            </p>
            <p>
                <span>
                #add code
                </span>
            </p>
            <p>
            <input style={{ width: "160px" }} type="text" /> 
            </p>
            <p>
                <span>
                print(sales)
                </span>
            </p>
           
            </>
        ),
        options: ["+=","1","sales"],
        answer: ["sales","+=","1"]
    },
    {
        id: 12,
        type: "code",
        question: (
            <>
            <p>
            To subtract from a variable's value, we use the -= operator.
            </p>
            </>
        ),
        ide_num: 9,
        ide_content: (
            <>
            <p>
                <span>
                sales = 5
                </span>
            </p>
            <p>
                <span>
                sales 
                </span>
                <input style={{ width: "160px" }} type="text" /> 
                <span>
                    3
                </span>
            </p>
            <p>
                <span>
                print(sales)
                </span>
            </p>
           
            </>
        ),
        answer: ["-="]
    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
            <p>
            What does this code display in the console?
            </p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                marbles = 6
                </span>
            </p>
            <p>
                <span>
                marbles += 2
                </span>
            </p>
            <p>
                <span>
                print(marbles)  
                </span>
            </p>
            
            
            
            </>
        ),
        options: ["8","6"],
        answer: [1]
    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
            <p>
            What operator do we use to multiply a number to a variable's value?
            </p>
            </>
        ),
        options: ["/=","*="],
        answer: [2]
    },
    {
        id: 15,
        type: "code",
        question: (
            <>
            <p>
            Add ten to the variable's value using the += operator.
            </p>
            </>
        ),
        ide_num: 10,
        ide_content: (
            <>
            <p>
                <span>
                yards = 80
                </span>
            </p>
            <p>
            <input style={{ width: "160px" }} type="text" /> 
            </p>
            <p>
                <span>
                print(yards) 
                </span>
            </p>
            

           
            </>
        ),
        answer: ["yards += 10"]
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
    level: 5,
    current_sublevel: 5,
    max_sublevel: 5,
    total_ques: total_ques,
    total_xp: total_xp,
    cutoff: cutoff,
    topic: "Deciding with Lists",

}

// console.log(quizDetails)


