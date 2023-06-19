import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                Let's learn a new concept which explains how variables keep track of things like adding or removing dollars from a wallet.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                When we create a variable, we assign it a value, like assigning 3 to wallet.
            </>
        ),
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>wallet</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>3</span>
                </p>
                <p>
                    <span>
                    print(wallet)
                    </span>
                </p>
                
            </>
        ),
        options: ["=","=="],
        answer: ["="]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                Self-assignment is when we set a variable to its own value. 
                <br></br>
                For example, we can set wallet to its value 3 with wallet = wallet.
            </>
        ),
        ide_num:2,
        ide_content: (
            <>
            <p>
                <span>
                wallet = 3
                </span>
            </p>
            <p>
            <input style={{ width: "40px" }} type="text" />
            <input style={{ width: "40px" }} type="text" />
            <input style={{ width: "40px" }} type="text" />
            </p>
            <p>
                <span>
                print(wallet)
                </span>
            </p>
            </>
        ),
        options: ["wallet","=","wallet"],
        answer: ["wallet","=","wallet"]
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>Because we can self-assign variables, we can increase or decrease variables set to numbers. Try increasing wallet with wallet = wallet + 1.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
            <p>
                <span>
                wallet = 3
                </span>
            </p>
                <p>
                    <span>
                    wallet =
                    </span>
                    <input style={{ width: "40px" }} type="text" />
                    
                </p>
                <p>
                    <span>
                    print(wallet)
                    </span>
                </p>
            </>
        ),
        options: ["wallet + 1","3 + 1"],
        answer: ["wallet + 1"]

    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>Self-assigning variables let us track data that changes over time. For example, a user might add 2 dollars to a wallet and then remove 1.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 4,
        ide_content: (
            <>
            <p>
                <span>
                wallet = 3
                </span>
            </p>
                <p>
                    <span>
                    wallet = wallet + 
                    </span>
                    <input style={{ width: "20px" }} type="text" />
                </p>    
                <p>
                    <span>
                    wallet = wallet -
                    </span>
                    <input style={{ width: "20px" }} type="text" />
                    </p>    
                    <p>
                        <span>
                        print(wallet)
                        </span>

                    </p>
                    

                
            </>
        ),
        options: ["2","1"],
        answer: ["2","1"]

    },
    {
        id: 6,
        type: "code",
        theory: (
            <>
            <p>Variables set to strings work the same way. Try setting name to name + " John".</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 5,
        ide_content: (
            <>
            <p>
                <span>
                name = "Account name: "
                </span>
            </p>
            <p>
                <span>
                name = "Account name: "
                </span>
            </p>
            <p>
                <span>
                name = name + " Elton"
                </span>
            </p>
                <p>
                    <span>
                    name =
                    </span>
                    <input style={{ width: "160px" }} type="text" />
                     <span> + " John"</span> 
                    
                </p>
                <p>
                    <span>
                    print(name)
                    </span>
                
                </p>
            </>
        ),
        answer: ["name"]

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
                speed = 100
                </span>
            </p>
            <p>
                <span>
                speed = speed + 1
                </span>
            </p>
            <p>
                <span>
                print(speed)
                </span>
            </p>
            </>
        ),
        options: ["101", "100"],
        answer: 1

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
            <p>Why is self-assigning such a powerful programming concept?</p>
            </>
        ),
        options: ["Because it helps us create comparisons","Because it lets us track data that changes over time"],
        answer: 2
    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
            <p>Assign 15 to the wallet variable.</p>
            </>
        ),
        ide_num: 6,
        ide_content: (
           <>
           <p>
            <span>
            wallet
            </span>
            <input style={{ width: "160px" }} type="text" />
            <input style={{ width: "160px" }} type="text" />
           </p>
           </>
        ),
        options: ["15","==","="],
        answer: ["=","15"]
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
            <p>
            Add five to the value of the inventory variable.
            </p>
            </>
        ),
        ide_num: 7,
        ide_content: (
            <>
            <p>
                <span>
                inventory = 11
                </span>
            </p>
            <p>
                <span>
                inventory = 
                <input style={{ width: "160px" }} type="text" />
                </span>
            </p>
            <p>
                <span>
                print(inventory)
                </span>
            </p>
            
            </>
        ),
        options: ["5","inventory + 5"],
        answer: ["inventory + 5"]
    },
    {
        id: 11,
        type: "code",
        theory: (
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
            <input style={{ width: "160px" }} type="text" />
            <input style={{ width: "160px" }} type="text" />
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
        theory: (
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
        answer: 1
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
        answer: 2
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
