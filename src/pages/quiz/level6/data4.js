import React from "react";


const questions = [
    {
        id: 1,
        type: "theory",
        message: (
            <>
                To combine two datasets, like the ones in <span>dataset_1</span> and <span>dataset_2</span>, we use the lists' names and the <span>+</span> operator.           
            </>
        )
    },
    {
        id: 2,
        type: "theory",
        message: (
            <>
                When using +, the second list is appended at the end of the first list.           
            </>
        )
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>We can also use <span>+</span> to combine lists containing different types of values, like the numeric <span>seats</span> and the boolean <span>taken</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>seats = [1, 2, 3]</span>
                </p>
                <p>
                    <span>taken = [True, True, False]</span>
                </p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>+</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["seats","taken"]
    },
    {
        id: 4,
        type: "mcq",
        question: (
            <>
                <p>What does the + operator do when used on two lists?</p>
            </>
        ),
        ide: false,
        options: ["It adds each element from one list to each element of the other", "It joins the two lists' elements into a new list"],
        answer: 2
    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>When coding <span>list_1 + list_2</span>, in which order will the elements appear in the new list?</p>
            </>
        ),
        ide: false,
        options: ["The elements of list_1 will appear first, then those of list_2", "The elements of both lists will be mixed randomly"],
        answer: 1
    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>What types of values can the lists we combine have?</p>
            </>
        ),
        ide: false,
        options: ["Any type", "Only the same type"],
        answer: 1
    },
    {
        id: 7,
        type: "code",
        theory: (
            <>
                <p>Join the <span>customers</span> and  <span>order_number</span> lists so that the order_number come first.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>customers = ["Jess", "Mike", "Lynn"]</span>
                </p>
                <p>
                    <span>order_number = [3, 1, 2]</span>
                </p>
                <p>
                    <span>print(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>+</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>)</span>
                </p>
            </>
        ),
        answer: ["order_number","customers"]
    },
];


export default questions;

