import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Let's dive into controlling the times a while loop repeats its code, like this page that uses a loop to display several cameras.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                To control the times a while loop repeats, we start with a variable set to a number. We call this variable a counter variable.
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>counter = </span>
                    <input style={{ width: "40px" }} type="text" />
                </p>
                
            </>
        ),
        options: ["1","True"],
        answer: ["1"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p><span>Then, we use a comparison in the condition to compare the counter variable to a number. In this case, counter &lt; 4:.</span></p>
            </>
        ),
        ide_num:2,
        ide_content: (
            <>
            counter = 1

            while
            </>
        ),
        options: [":",">","<","4","counter"],
        answer: ["counter","<","4",":"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p><span>Inside the code block, we make the condition return False and stop the loop by incrementing the counter variable.</span>
                <br></br>
                <span>In this case += increases the value of the counter variable by 1 each time the loop runs. Try it with counter += 1.</span></p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    
                    <span>counter = 1</span>
                    
                      
                </p>
                <p>
                    <span>
                    while counter &lt; 4:
                    </span>
                </p>
                <p>
                &emsp;<input style={{ width: "40px" }} type="text" />
                </p>
                <p>
                print(counter)
                </p>
            </>
        ),
        
        answer: ["counter += 1"]

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Changing the condition tells the loop when to stop. For example, changing the condition to counter &lt; 10.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                    <span>
                    counter = 1
                    </span>
                </p>
                <p>
                    <span>while</span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>:</span>
                </p>
                <p>
                    <span>

                   
                    &emsp; print(counter)
                    </span>
                </p>
                <p>
                    <span>
                        &emsp; counter += 1
                    </span>
                </p>

            </>
        ),
        answer: ["counter < 10"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
            <p>Changing the counter variable's value changes when the loop starts. Like setting counter to 5.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
                <p>
                    
                    <span>counter =</span>
                    <input style={{ width: "160px" }} type="text" />
                </p>
                <p>
                    <span>
                    while counter &lt; 10:
                    </span>
                </p>
                <p>
                    <span>
                        &emsp;print(counter)
                    </span>
                </p>
                <p>
                    <span>
                        &emsp;counter += 1
                    </span>
                </p>
            </>
        ),
        answer: ["5"]

    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
            <p>The order of your code affects what the console displays. Place counter += 1 first, to display 6 to 10.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 6,
        ide_content: (
            <>
                <p>
                    <span>
                    counter = 5
                    </span>
                    
                </p>
                <p>
                    <span>
                    while counter &lt; 10:
                    </span>
                </p>
                <p>
                    &emsp;
                <input style={{ width: "160px" }} type="text" />
                </p>
                <p>
                    &emsp;
                <input style={{ width: "160px" }} type="text" />
                </p>
            </>
        ),
        options: ["print(counter)","counter += 1"],
        answer: ["counter += 1","print(counter)"]

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            <p>What's the name of the variable that we use to count the number of times a loop repeats?</p>
            </>
        ),
        // keep a count of the number of code questions
        options: ["A tracker variable", "A counter variable"],
        answer: [2]

    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
            <p>What's the condition of this while loop?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                counter = 1
                </span>
            </p>
            <p>
              <span>
              while counter &lt; 10:
            </span>  
            </p>
            <p>
                <span>
                    &emsp;print(counter)
                </span>
            </p>
             <p>
            <span>
                &emsp;counter += 1
            </span>
            </p>    
            </>
        ),
        options: ["counter", "counter < 10"],
        answer: [2]

    },
    {
        id: 10,
        type: "mcq",
        question: (
            <>
            <p>What does counter += 1 do?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                counter = 1 
                </span>
            </p>
            <p>
            <span>
            while counter &lt; 10:
            </span>
            </p>  
            <p>
                <span>
                    &emsp;print(counter)
                </span>
            </p>
             <p>
                <span>
                    &emsp;counter += 1
                    </span></p>   
                  
                  
            </>
        ),
        options: ["It increases counter by one each time the loop runs its code block", "It creates the counter variable"],
        answer: [1]

    },
    {
        id: 11,
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
                    counter = 1
                        </span></p>
                <p>
                    <span>
                    while counter &lt; 5:
                    </span>
                </p>
                <p>
                    <span>
                        &emsp;print(counter)
                    </span>
                </p>
                <p>
                    <span>
                    counter += 1  </span></p> 
                  
            </>
        ),
        options: ["The numbers 1 through 4", "The numbers 1 through 10"],
        answer: [1]

    },
    {
        id: 12,
        type: "code",
        question: (
            <>
            <p>
            Display the number 1 through 5 by setting the condition to number &lt; 6.
            </p>
            </>
        ),
        ide_num: 7,
        ide_content: (
            <>
            <p>
                <span>
                number = 1
                </span>
            </p>
            <p>
                <span>
                while     
                </span>
                <input style={{ width: "160px" }} type="text" />
                <span>
                :
                </span>
            </p>
            <p>
                <span>
                 &emsp; print(number)  
                </span>
            </p>
            <p>
                <span>
                    &emsp;number += 1
                </span>
            </p>
            </>
        ),
        answer: ["number < 6"]
    },
    {
        id: 13,
        type: "code",
        question: (
            <>
            <p>
            Set an increment to the counter variable so that the loop will eventually stop.
            </p>
            </>
        ),
        ide_num: 8,
        ide_content: (
            <>
            <p>
                <span>
                counter = 1
                </span>
            </p>
            <p>
                <span>
                while counter &lt; 6:
                </span>
            </p>
            <p>
                <span>
                   &emsp;print(counter) 
                </span>
            </p>
            <p>
                &emsp;
            <input style={{ width: "160px" }} type="text" /> 
            </p>

            </>
        ),
        answer: ["counter += 1"]
    },
    {
        id: 14,
        type: "code",
        question: (
            <>
            <p>
            Display 3 through 7 in the console by setting the counter variable's value.
            </p>
            </>
        ),
        ide_num: 9,
        ide_content: (
            <>
            
            <p>
                <span>
                counter = 
                </span>
                <input style={{ width: "160px" }} type="text" />
            </p>
            <p>
                <span>
                while counter &lt; 8: 
                </span>
            </p>
            <p>
                <span>
                    &emsp;print(counter)
                </span>
            </p>
            <p>
                <span>
                    &emsp;counter += 1
                </span>
            </p>
              
              
            </>
        ),
        answer: ["3"]
    },
    

];


export default questions;
