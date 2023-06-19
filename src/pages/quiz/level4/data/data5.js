import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Using for loops, we can write programs with much less code and make it easier for other programmers to understand.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                To create a for loop like this, we add the for keyword, a variable like i, the word in, and finally range():
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" />
                </p>
                
            </>
        ),
        options: ["for","i","in","range():"],
        answer: ["for","i","in","range():"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                In a for loop we can specify how many times we'd like our loop to run with the range() statement.
            </>
        ),
        ide_num:2,
        ide_content: (
            <>
            <p>
                <span>
                for i in 
                </span>
                <input style={{ width: "40px" }} type="text" />
                <span>
                (5):
                </span>
            </p>
            <p>
            <span>
                &emsp;print("Happy Birthday")
            </span>
            </p>   
                
            </>
        ),
        options: ["for","print","range","while"],
        answer: ["range"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>Adding a number like 6, inside range() means it'll loop over the code block 6 times, from 0 until 5.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    
                    <span>
                    for i in
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    <input style={{ width: "40px" }} type="text" /> 
                    <input style={{ width: "40px" }} type="text" /> 
                    <input style={{ width: "40px" }} type="text" />     
                        
                </p>
                <p>
                    <span>
                        &emsp;print(i)
                    </span>
                </p>
            </>
        ),
        options: ["range",":","(",")","6"],
        answer: ["range","(","6",")",":"]

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>The variable before in, in this case, i, is the counter variable. It counts what repetition of the loop we're currently on.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                    <span>
                    for 
                    </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>
                    in range(3):
                    </span>
                </p>
                <p> &emsp;
                    <span>
                        print(
                    </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>
                        )
                    </span>
                </p>
                <p>
                    <span>
                        &emsp;print("For loops are great!")
                    </span>
                </p>
            </>
        ),
        options: ["for","i","i"],
        answer: ["i","i"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
            <p>What type of loop does this have?</p>
            </>
        ),
        ide_num: 5,
        ide_content: (
            <>
                <p>
                    <span>
                    for i in range (4):
                    </span>
                </p>
                <p>
                    <span>
                        &emsp;print("Are you ready?")
                    </span>
                </p>
            </>
        ),
        options: ["A while loop","A for loop"],
        answer: [2]

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
            <p>Where does the loop variable in a for loop go?</p>
            </>
        ),
        
        options: ["Before the in keyword", "After the range() statement"],
        answer: [1]

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            <p>Which variable is the counter variable of the for loop?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                for i in range(2):
                </span>
            </p>
            <p>
                <span>
                 &emsp; print("We will")  
                </span>
            </p>
            <p>
                <span>
                print("Rock you!") 
                </span>
            </p>
            
            </>
        ),
        options: ["i","range"],
        answer: [1]
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
            <p>How many times will be like me appear in the console?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                print("Everybody wants to")
                </span>
            </p>
            <p>
                <span>
                for i in range(3):
                </span>
            </p>
            <p>
                <span>
                &emsp; print("be like me")  
                </span>
            </p>
          </>
        ),
        options: ["3","4"],
        answer: [1]
    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
            <p>What's wrong with this code?</p>
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                for  in range(5):
                </span>
            </p>
            <p>
                <span>
                  &emsp; print(i) 
                </span>
            </p>
            
              
            </>
        ),
        options: ["It's missing the counter variable after the for keyword","Nothing's wrong with the code"],
        answer: [1]
    },
    {
        id: 11,
        type: "code",
        question: (
            <>
            <p>Assemble the structure of a for loop.</p>
            </>
        ),
        ide_num: 6,
        ide_content: (
           <>
           <p>
           <input style={{ width: "20px" }} type="text" />
           <span>
           in
           </span>
           <input style={{ width: "20px" }} type="text" />
           <span>
           :
           </span>
           </p>
           <p>
            <span>
                &emsp;print("Updating accounts... ")
            </span>
           </p>
           </>
        ),
        options: ["(4)","for","i","range"],
        answer: ["for","i","range","(4)"]
    },
    {
        id: 12,
        type: "code",
        question: (
            <>
            <p>
            Loop over this code block twice by coding range(2):.
            </p>
            </>
        ),
        ide_num: 7,
        ide_content: (
            <>
            <p>
                <span>
                for i in
                </span>
                <input style={{ width: "20px" }} type="text" />
            </p>
            <p>
                <span>
                    &emsp;print("Accessing GDP values")
                </span>
            </p>
                
            </>
        ),
        answer: ["range(2)"]
    },
    

];


export default questions;