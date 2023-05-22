import React from "react";


const questions = [
    {
        id: 1,
        type: "theory_ide",
        theory: (
            <>
                <p>We can use comparison to check if a string is equal to or not equal to another string.</p>
            </>
        ),
        ide_content: (
            <>
                <p><span>print(“online” == “online”)</span></p>
                <p><span>print(“online” != “offline”)</span></p>
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>To check if a string is equal to another string, we also use the <b>equality operator</b>,<span>==</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 1,
        ide_content: (
            <>
                <p>
                    <span>print ( "apple" </span>
                    <input style={{ width: "40px" }} />
                    <span>"apple" )</span>
                </p>
            </>
        ),
        answer: ["=="]
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>If the string on the left is equal to the string on the right, as in <span>“apple” == “apple” </span> , the result is <span>True</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 2,
        ide_content: (
            <>
                <p>
                    <span>print ( </span>
                    <input style={{ width: "70px" }} />
                    <input style={{ width: "40px" }} />
                    <input style={{ width: "70px" }} />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ['"apple"', '==', '"apple"']
    },
    {
        id: 4,
        type: "code",
        theory: (
            <>
                <p>If the string on the left isn’t equal to the string on the right, as in <span>“apple” == “orange” </span>, the result is <span>False</span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 3,
        ide_content: (
            <>
                <p>
                    <span>print ( "apple" </span>
                    <input style={{ width: "40px" }} />
                    <input style={{ width: "75px" }} />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ['==', '"orange"']
    },
    {
        id: 5,
        type: "code",
        theory: (
            <>
                <p>We can also compare variables that store strings with each other,like in<span>fruit_1 == fruit_2 </span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 4,
        ide_content: (
            <>
                <p><span>fruit_1 = "apple"</span></p>
                <p><span>fruit_2 = "orange"</span></p>
                <p>
                    <span>print ( </span>
                    <input style={{ width: "70px" }} />
                    <input style={{ width: "70px" }} />
                    <input style={{ width: "70px" }} />
                    <span>)</span>
                </p>

            </>
        ),
        answer: ['fruit_1', '==', 'fruit_2']

    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>Which of these is the equality operator?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['=', '=='],
        answer: 2

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>Which of these comparisons results in <span>True</span>?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['“apple” == “apple”', '“apple” == “orange”'],
        answer: 1

    },
    {
        id: 8,
        type: "code",
        theory: (
            <>
                <p>Check if <span>my_answer</span>is equa to <span>solution</span>.</p>

            </>
        ),
        // keep a count of the number of code questions
        code_num: 5,
        ide_content: (
            <>
                <p><span>my_answer = "act"</span></p>
                <p><span>solution = "ace"</span></p>
                <p>
                    <span>print ( my_answer </span>
                    <input style={{ width: "50px" }} />
                    <span>solution )</span>
                </p>
            </>
        ),
        answer: ["=="]

    },
    {
        id: 9,
        type: "code",
        theory: (
            <>
                <p>To check if a string isn’t equal to another string, we use the <b>inequality operator</b> <span>!=</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 6,
        ide_content: (
            <>
                <p>
                    <span>print ("subscribed" </span>
                    <input style={{ width: "50px" }} />
                    <span>"rejecte" )</span>
                </p>
            </>
        ),
        answer: ['!=']
    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>If the left string isn’t equal to the right string, as in <span>“subscribed” != “rejected”</span>, the result is <span>True</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 7,
        ide_content: (
            <>
                <p>
                    <span>print ( </span>
                    <input style={{ width: "100px" }} />
                    <input style={{ width: "30px" }} />
                    <input style={{ width: "80px" }} />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ['"subscribed"', '!=', '"rejected"']
    },
    {
        id: 11,
        type: "code",
        theory: (
            <>
                <p>If the string on the left is equal to the string on the right, as in <span>“subscribed” != “subscribed” </span>, the result is <span>False</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 8,
        ide_content: (
            <>
                <p>
                    <span>print ( "subscribed" </span>
                    <input style={{ width: "20px" }} />
                    <input style={{ width: "20px" }} />
                    <span>"subscribed" )</span>
                </p>
            </>
        ),
        answer: ['!', '=']
    },
    {
        id: 12,
        type: "mcq",
        question: (
            <>
                <p>Which of these is <span>True</span>?</p>
            </>
        ),
        // keep a count of the number of code questions
        ide: false,
        options: ['“black” != “orange”', '“orange” != “orange”'],
        answer: 1

    },
    {
        id: 13,
        type: "code",
        theory: (
            <>
                <p>Store a string in <span>wallpaper</span> to display <span>False</span> in the console.</p>
                <p><span>"bites.png"</span> or <span>"cat.png"</span></p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 9,
        ide_content: (
            <>
                <p>
                    <span>wallpaper =  </span>
                    <input style={{ width: "90px" }} />
                </p>
                <p><span>print ( wallpaper != "bites.png" )</span></p>
            </>
        ),
        answer: ['"bites.png"']
    },
    {
        id: 14,
        type: "code",
        theory: (
            <>
                <p>Check if <span>big_city</span> is not equal to<span>small_city</span>  by coding <span>!=</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        code_num: 10,
        ide_content: (
            <>
                <p><span>big_city = "Popica"</span></p>
                <p><span>small_city = "Tropica"</span></p>
                <p><span>print ( big_city </span>
                    <input style={{ width: "30px" }} />
                    <span>small_city )</span>
                </p>
            </>
        ),
        answer: ['!=']
    },
];


export default questions;

