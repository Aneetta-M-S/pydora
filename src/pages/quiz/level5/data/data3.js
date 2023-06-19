import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Let's learn how to add and remove values in a list. Like in this app, which uses a list to manage user's score data.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                To add the value 25 to a list, we code the list name followed by a period ., then the instruction append(25).
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>
                    scores = [24, 23]
                    </span>
                </p>
                <p>
                scores.
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                </p>
                <p>
                    <span>
                    print(scores)
                    </span>
                </p>
                
                
            </>
        ),
        options: ["25","append","(",")"],
        answer: ["append","(","25",")"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                Adding a value with .append() places it at the end of the list. We can see the result here by coding print(users).
            </>
        ),
        ide_num:2,
        ide_content: (
            <>
            <p>
                <span>
                users = ["john", "hannah", "marco"]
                </span>
            </p>
            <p>
                <span>
                users.append("julian")
                </span>
            </p>
            <p>
            <input style={{ width: "40px" }} type="text" />
            <input style={{ width: "40px" }} type="text" />
            <input style={{ width: "40px" }} type="text" />
            <input style={{ width: "40px" }} type="text" /> 
            </p>
            
            

            </>
        ),
        options: ["users",")","(","print"],
        answer: ["print","(","users",")"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                We add a value to a specific index with insert(). By coding insert(0, "lemon"), we'll add the value to the start of the list.
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>
                    shopping = ["kiwis", "peas"]
                    </span>
                </p>
                <p>
                    <span>
                    shopping.
                    </span>
                    <input style={{ width: "40px" }} type="text" /> 
                    <input style={{ width: "40px" }} type="text" /> 
                    <input style={{ width: "40px" }} type="text" /> 
                </p>
                <p>
                    <span>
                    print(shopping)
                    </span>
                </p>
            </>
        ),
        options: ["insert","(0,\"lemon\")"],
        answer: ["insert","(0,\"lemon\")"]

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>The insert() function has two parameters. First, the index where we want to insert the value, followed by the value .insert(1, "chocolate") adds a value in the second position.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                <span>
                shopping = ["kiwis", "peas"]
                </span>  
                </p>
                <p>
                    <span>
                    shopping.insert(0, "lemon")
                    </span>
                </p>
                <p>
                    <span>
                    shopping. 
                    </span>
                    <input style={{ width: "40px" }} type="text" /> 
                    <span>
                        (
                    </span>
                    <input style={{ width: "40px" }} type="text" /> 
                    <input style={{ width: "40px" }} type="text" /> 
                    <input style={{ width: "40px" }} type="text" />
                    <span>
                        )</span> 
                </p>
                <p>
                    <span>
                    print(shopping)
                    </span>
                </p>
            </>
        ),
        options: ["chocolate","1",",","insert"],
        answer: ["insert","1",",","chocolate"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
            <p>For both append() and insert(), we can only add one element at a time.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
                
                <p>
                    <span>
                    initials = ["RM", "LP"]
                    </span>
                </p>
                <p>
                    <span>
                    initials. 
                    </span>
                    <input style={{ width: "160px" }} type="text" />
                    <span>
                    ("LC")
                    </span>
                </p>
                <p>
                    <span>
                    initials. 
                    </span>
                    <input style={{ width: "160px" }} type="text" />
                    <span>
                    (1, "LS")
                    </span>
                </p>
                <p>
                    <span>
                    print(initials)
                    </span>
                </p>
            </>
        ),
        options: ["append","insert"],
        answer: ["append","insert"]

    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
            <p>To remove the last element of a list, we code the list name todo, a period ., and the instruction pop().</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 6,
        ide_content: (
            <>
                <p>
                    <span>
                    todo = ["call mom", "dishes"]
                    </span>
                </p>
                <p>
                    <span>
                    todo. 
                    </span>
                    <input style={{ width: "160px" }} type="text" />
                </p>
                <p>
                    <span>
                    print(todo)
                    </span>
                </p>
          </>
        ),
        
        answer: ["pop()"]

    },
    {
        id: 8,
        type: "code",
        theory: (
            <>
            <p>Why is self-assigning such a powerful programming concept?</p>
            </>
        ),
        ide_num: 7,
        ide_content: (
            <>
            <p>
                <span>
                todo = ["call mom", "dishes", "painting"]
                </span>
            </p>
            <p>
                <span>
                todo.
                </span>
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
            </p>
            <p>
                <span>
                print(todo)
                </span>
            </p>
            
            </>
        ),
        options: ["pop","1","(",")"],
        answer: ["pop","(","1",")"]
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
            <p>We can store the poped element to a variable to use it later</p>
            </>
        ),
        ide_num: 8,
        ide_content: (
           <>
           <p>
            <span>
            todo = ["call mom", "dishes", "painting"]
            </span>
           </p>
           <p>
            <span>
            removed = todo.pop(0)
            </span>
           </p>
           <p>
           <input style={{ width: "160px" }} type="text" />
           </p>
           </>
        ),
        answer: ["print(removed)"]
    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
            <p>
            Which instruction do we use to add a value to a list?
            </p>
            </>
        ),
        options: [".pop()",".append()"],
        answer: [2]
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
            <p>Where does a new value we add with .append() go?</p>
            </>
        ),
        options: ["At the end of the list","At the beginning of the list"],
        answer: [1]
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
            <p>How many values at a time can we add to a list using .append() and .insert()?</p>
            </>
        ),
        options: ["As many as we want","One value at a time"],
        answer: [2]
    },
    {
        id: 13,
        type: "mcq",
        question: (
            <>
            <p>Which instruction do we use to remove the last element of a list?</p>
            </>
        ),
        options: [".pop()",".append()"],
        answer: [1]
    },
    {
        id: 14,
        type: "mcq",
        question: (
            <>
            <p>
            How can we save the value removed by .pop()?
            </p>
            </>
        ),
        options: ["By storing it in a variable","We can't save it, .pop() does not give as a value"],
        answer: [1]
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


export default questions;