import React from "react";


const questions = [
    // {
    //     id: 1,
    //     type: "mcq",
    //     question: (
    //         <>
    //             <p>What does max() do?</p>
    //         </>
    //     ),
    //     ide: false,
    //     options: ["It gives the length of a list of numbers", "It finds the greatest value in a list of numbers"],
    //     answer: 2

    // },
    // {
    //     id: 2,
    //     type: "mcq",
    //     question: (
    //         <>
    //             <p>What is min() for?</p>
    //         </>
    //     ),
    //     ide: false,
    //     options: ["Removing elements from a list", "Finding the smallest number in a list"],
    //     answer: 2

    // },
    // {
    //     id: 3,
    //     type: "code",
    //     theory: (
    //         <>
    //             <p>We can reuse the results of <span>min()</span> and <span>max()</span> by saving them in variables.</p>
    //         </>
    //     ),
    //     // keep a count of the number of code questions
    //     ide_num: 1,
    //     ide_content: (
    //         <>
    //             <p>
    //                 <span>scores = [3, 6, 1, 12]</span>
    //             </p>
    //             <p> 
    //                 <span>min_score=</span>
    //                 <input style={{ width: "40px" }} type="text" />
    //                 <span>(scores)</span>
    //             </p>
    //             <p>
    //                 <span>max_score=</span>
    //                 <input style={{ width: "40px" }} type="text" />
    //                 <span>(scores)</span>
    //             </p>
    //             <p>
    //                 <span>print(max_score)</span>
    //             </p>
    //             <p>
    //                 <span>print(min_score)</span>
    //             </p>
    //         </>
    //     ),
    //     answer: ["min","max"]
    // },

    {
        id: 1,
        type: "theory",
        message: (
            <>
                To count how often a value appears in a list like answers, we start with the list name, a dot  ., and then <span>count()</span>.
            </>
        )
    },
    {
        id: 2,
        type: "code",
        theory: (
            <>
                <p>To count how often "yes" appears in the answers list, we code "yes" between the parentheses of <span>count()</span>.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 1,
        ide_content: (
            <>
                <p>
                    <span>answers = ["yes", "no", "sometimes", "yes", "no"]</span>
                </p>
                <p>
                    <span>print(answers.count(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>))</span>
                </p>
            </>
        ),
        answer: ['"yes"']
    },
    {
        id: 3,
        type: "code",
        theory: (
            <>
                <p>If we don't want to know the exact number, but only if an element like "sugar" exists, we use the in keyword.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 2,
        ide_content: (
            <>
                <p>
                    <span>ingredients = ["flour", "butter", "sugar", "eggs"]</span>
                </p>
                <p>
                    <span>print("sugar"</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>ingredients)</span>
                </p>
            </>
        ),
        answer: ['in']
    },
    {
        id: 4,
        type: "theory",
        message: (
            <>
                Checking if an element like "sugar" is in a list like "ingredients" gives us a boolean, either True or False
            </>
        )
    },
    {
        id: 5,
        type: "mcq",
        question: (
            <>
                <p>What does <span>count()</span> do when given a value?</p>
            </>
        ),
        ide: false,
        options: ["It tells us how often that value appears in a list", "It counts all the elements in a list"],
        answer: 1

    },
    {
        id: 6,
        type: "mcq",
        question: (
            <>
                <p>Where do we code the element that we want to count in a list?</p>
            </>
        ),
        ide: false,
        options: ["Between the parentheses of .count()", "Before .count()"],
        answer: 1

    },
    {
        id: 7,
        type: "mcq",
        question: (
            <>
                <p>What types of values can we use <span>count()</span> with?</p>
            </>
        ),
        ide: false,
        options: ["String, boolean, integer and float", "Only strings"],
        answer: 1

    },
    {
        id: 8,
        type: "mcq",
        question: (
            <>
                <p>What can we use the <span>in</span> keyword for?</p>
            </>
        ),
        ide: false,
        options: ["Checking if a list contains an element", "Counting the number of occurrences of an element in a list"],
        answer: 1

    },
    {
        id: 9,
        type: "mcq",
        question: (
            <>
                <p>What type of value do we get when using the <span>in</span> keyword?</p>
            </>
        ),
        ide: false,
        options: ["A boolean like True or False", "A number"],
        answer: 1

    },
    {
        id: 10,
        type: "code",
        theory: (
            <>
                <p>Find out how often the temperature was 32 degrees Fahrenheit by coding <span>32</span> between the parentheses.</p>
            </>
        ),
        // keep a count of the number of code questions
        ide_num: 3,
        ide_content: (
            <>
                <p>
                    <span>temperatures = [40, 32, 32, 38]</span>
                </p>
                <p>
                    <span>print(temperatures.count(</span>
                    <input style={{ width: "40px" }} type="text" />
                    <span>))</span>
                </p>
            </>
        ),
        answer: ['32']
    },
    {
        id: 11,
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
                <p> <span>flavors = ["vanilla", "chocolate", "strawberry", "vanilla", "vanilla"]</span> </p>
                <p> <span>print(flavors.count())</span> </p>
            </>
        ),
        options: ["There should be a value between the parentheses of count()", "The list is too long"],
        answer: 1
    },

];


export default questions;

