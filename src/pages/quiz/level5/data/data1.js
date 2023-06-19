import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Being able to organize lots of related data, like these age variables, for example, is an essential part of data science.
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                age_1 = 27
                </span>
            </p>
            <p>
                <span>
                age_2 = 20 
                </span>
            </p>
            <p>
                <span>
                age_3 = 22 
                </span>
            </p>
            <p>
                <span>
                age_4 = 36
                </span>
            </p>
            <p>
                <span>
                age_5 = 16   
                </span>
            </p>
            <p>
                <span>
                age_6 = 42  
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
                Rather than creating a variable for each new piece of data, we can collect related data inside a list using [ and ].
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>
                    todo = 
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>
                    "Read", "Workout", "Code"
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                </p>
                 <p>
                    <span>
                    print(todo)
                    </span>
                 </p>
                
            </>
        ),
        options: ["[","]"],
        answer: ["[","]"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                The values or data inside a list are called elements. "Read", "Workout", and "Code" are elements of this list.
            </>
        ),
        ide_num:2,
        ide_content: (
            <>
            <p>
                <span>
                todo = ["Read", "Workout",
                </span>
                <input style={{ width: "40px" }} type="text" />
                <span>
            ]
                </span>
            </p>
             <p>
                <span>
                print(todo)
                </span>
             </p>
            
            </>
        ),
        options: ["code","todo"],
        answer: ["code"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>To create an empty list, we code [ and ].</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>
                    todo =
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    
                </p>
                <p>
                    <span>
                    print(todo)
                    </span>
                </p>
            </>
        ),
        options: ["[","]"],
        answer: ["[","]"]

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Placing a string between the brackets creates a list with one value, like here with ["Coding"].</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                    <span>
                    todo =
                    </span>
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    <input style={{ width: "20px" }} type="text" />
                    

                </p>
                <p>
                    <span>
                    print(todo)
                    </span>
                </p>
            </>
        ),
        options: ["Coding","]","["],
        answer: ["[","Coding","]"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
            <p>We use commas , to separate two or more values in a list, like "Read" from "Workout".</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
                <p>
                    <span>
                    todo = ["Read" 
                    </span>
                    <input style={{ width: "160px" }} type="text" />
                    <span> "Workout"]</span>
                     <p>
                        <span>
                        print(todo)    </span></p>   
                   
                </p>
            </>
        ),
        options: [",","]","["],
        answer: [","]

    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
            <p>Any number of values of any type fits in a list. We add more by coding a comma and the value.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 6,
        ide_content: (
            <>
                <p>
                    <span>
                    todo = ["Read"
                    </span>
                    <input style={{ width: "160px" }} type="text" />
                    <span>
                    "Workout"
                    </span>
                    <input style={{ width: "160px" }} type="text" />
                    <span>
                    "Code"]
                    </span>
                    
                    
                </p>
                <p>
                    <span>
                    print(todo)
                    </span>
                </p>
            </>
        ),
        options: [",","]","[",","],
        answer: [",",","]

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            <p>What are the symbols for surrounding values in a list?</p>
            </>
        ),
        // keep a count of the number of code questions
        options: ["[ and ]", "{ and }"],
        answer: [1]

    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
            <p>What do we call the values of a list?</p>
            </>
        ),
        options: ["Conditions","Elements"],
        answer: [2]
    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
            <p>How many values does this list have?</p>
            </>
        ),
        ide: true,
        ide_content: (
           <>
           <p>
            <span>
            users = []
            </span>
           
           </p>
           </>
        ),
        options: ["Zero","One"],
        answer: [2]
    },
    {
        id: 11,
        type: "mcq",
        question: (
            <>
            <p>
            What's the symbol for separating values in an list?
            </p>
            </>
        ),
        options: ["A colon :","A comma ,"],
        answer: [2]
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
            <p>
            How many values can we store in a list?
            </p>
            </>
        ),
        options: ["Three","As many as we'd like"],
        answer: [2]
    },
    {
        id: 13,
        type: "code",
        question: (
            <>
            <p>
            Assign a list containing "Luz" to the siblings variable.
            </p>
            </>
        ),
        ide_num: 7,
        ide_content: (
            <>
            <p>
                <span>siblings =</span>
                <input style={{ width: "160px" }} type="text" />
            </p>
            <p>
                <span>
                print(siblings)
                </span>
            </p>
            
            </>
        ),
        options: ["[","]","\"Luz\""],
        answer: ["[","\"Luz\"","]"]
    },
    {
        id: 14,
        type: "code",
        question: (
            <>
            <p>
            Create an active_users variable that stores a list with the value "Finn".
            </p>
            </>
        ),
        ide_num: 8,
        ide_content: (
            <>
            <p>
                <span>active_users = </span>
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
            </p>
            <p>
                <span>
                print("Active:")
                </span>
            </p>
            <p>
                <span>
                print(active_users)
                </span>
            </p>
           
            </>
        ),
        options: ["\"Finn\"","]","["],
        answer: ["[","\"Finn\"","]"]
    },
    {
        id: 15,
        type: "code",
        question: (
            <>
            <p>
            Create a list with "peach" and "bowser" as the last two values.
            </p>
            </>
        ),
        ide_num: 9,
        ide_content: (
            <>
            <p>
                <span>
                characters = ["mario", "luigi",
                </span>
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
                <input style={{ width: "160px" }} type="text" />
                <span>
                ]
                </span>
            </p>
            <p>
                <span>
                print(characters)
                </span>
            </p>
            
            </>
        ),
        options: [",","\"bowser\"","\"peach\""],
        answer: ["\"bowser\"",",","\"peach\""]
    },
 
];


export default questions;