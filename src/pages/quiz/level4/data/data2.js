import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Programs repeat the same lines of code over and over again to build all sorts of things, like the repeated elements in the app below.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                To build larger programs and websites, we repeat lines of code using a while loop.
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
            <p>
            <input style={{ width: "40px" }} type="text" />
                <span>
                    True:
                </span>
            </p>
            <p>
                <span>
                print("and again")
                </span>
            </p>
            
            </>
        ),
        answer: ["while"]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                A while loop repeats its code block while its condition is True. We code a True condition with True followed by a colon :.
            </>
        ),
        ide_num: 2,
        ide_content: (
            <>
            <p>
                <span>
                while 
                </span>
                <input style={{ width: "40px" }} type="text" />
            </p>
            <p>
                <span>
                print("and again")
                </span>
            </p>
            
            </>
        ),
        answer: ["True"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>The code the while loop repeats comes after the :, inside the indented code block. Like the print() statement here.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
            <p>
                <span>
                while True:
                </span>
            </p>
                <p>
                    <input style={{ width: "40px" }} type="text" />

                </p>
                
            </>
        ),
        options: ["print(\"and again\")"],
        answer: ["print(\"and again\")"]

    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
            What keyword do we use to create a while loop?
            </>
        ),
        options: ["while","if"],
        answer: 1
    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
            How do we know when a while loop will stop?
            </>
        ),
        options: ["By checking its keyword","By checking its condition"],
        answer: 2
    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
            What's the indented code after the False: called?
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                while False: 
                </span>
            </p>
            <p>
                <span>
                print("Echo")
                </span>
            </p>
            
            </>
        ),
        options: ["A condition","A code block"],
        answer: 2
    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            What do we call a loop that repeats itself forever?
            </>
        ),
        options: ["An infinite loop","A while loop"],
        answer: 1
    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
            What happens when the condition of this while loop stays True?
            </>
        ),
        ide: true,
        ide_content: (
            <>
            <p>
                <span>
                while True:
                </span>
            </p>
            <p>
                <span>
                print("Polly wants a cracker!")
                </span>
            </p>
              
            </>
        ),
        options: ["The loop runs its code block once","The loop repeats itself forever and crashes the program"],
        answer: 2
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>Add the keyword to create a while loop.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
                <p>
                <input style={{ width: "40px" }} type="text" />
                    <span>
                    False: 
                    </span>
                <p>
                    <span>
                    print("Skip me!")
                        </span></p> 
                </p>
            </>
        ),
        answer: ["while"]

    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>Skip the code block of the while loop by setting the condition to False.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
                <p>
                    <span>
                    while
                    </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>
                    :
                    </span>
                    <p>
                        <span>
                        print("Skip me!")
                        </span>
                    </p>
                </p>
            </>
        ),
        answer: ["False"]

    },
    {
        id: 12,
        type: "code",
        theory: (
            <>
                <p>Add print("Hi there!"); to the code block of the while loop.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 6,
        ide_content: (
            <>
                <p>
                    <span>
                    while True:
                    </span>
                
                    <input style={{ width: "20px" }} type="text" />
                </p>
            </>
        ),
        answer: ["print(\"Hi there!\")"]

    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>Create an infinite loop by setting the condition to True.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 7,
        ide_content: (
            <>
                <p>
                    <span>
                    while
                    </span>
                    <input style={{ width: "20px" }} type="text" />
                    <span>
                        :
                    </span>
                     
                 
                  
                </p>
                <p>
                    <span>
                    print("To infinity,")
                    </span>
                </p>
                <p>
                print("and Beyond!")
                </p>
            </>
        ),
        answer: ["True"]

    },
    

];


export default questions;
